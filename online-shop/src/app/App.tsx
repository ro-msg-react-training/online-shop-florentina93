import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import { PRODUCTS_PATH, ORDERS_PATH, ROOT, BACKEND_API } from '../constants';
import { IProduct } from '../types';
import { ProductList } from '../components/products/ProductList';
import ProductDetails from '../components/products/ProductDetailsComponent';
import ShoppingCart from '../components/shopping_cart/ShoppingCart';

interface IProps {
  match: any,
  history: any
}
interface IState {
  data: IProduct[],
  cartItems: IProduct[],
  mockOrder: {},
  isLoading: boolean,
  error: any
}
class App extends React.Component<IProps> {
  state: IState;
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      cartItems: [],
      mockOrder: {
        customer: 'doej',
        products: [
          {
            productId: 3,
            quantity: 1
          },
          {
            productId: 5,
            quantity: 2
          }
        ]
      },
      isLoading: true,
      error: null
    }
  }
  componentDidMount() {
    this.fetchProducts();
  }
  render() {
    const { data, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <Switch>
          <Redirect exact from={ROOT} to={PRODUCTS_PATH} />
          <Route path={`${PRODUCTS_PATH}`} exact render={() => <ProductList data={data} />} />
          <Route path={`${PRODUCTS_PATH}/:id`} exact render={(props) => <ProductDetails id={props.match.params.id}
            onAddToCartClick={this.addToShoppingCart.bind(this)} onDeleteProductClick={this.deleteProduct.bind(this)} />} />
          <Route path={`${ORDERS_PATH}`} exact render={() => <ShoppingCart items={this.state.cartItems} onCheckoutClick={this.createNewOrder.bind(this)} />} />
        </Switch>
      </div>
    );

  }
  fetchProducts() {
    return fetch(`${BACKEND_API}${PRODUCTS_PATH}`) //return promise
      .then(response => response.json())
      .then(result => {
        this.setState({ data: result, isLoading: false })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  addToShoppingCart(product: IProduct) {
    console.log('add to shopping cart ' + product.name);
    let stateCopy = { ...this.state };
    stateCopy.cartItems.push(product);
    this.setState(stateCopy);
    //this.setState({cartItems: arr}) should work but is async
    console.log(this.state.cartItems.length);
  }

  deleteProduct(id: number) {
    fetch(`${BACKEND_API}${PRODUCTS_PATH}/${id}`,
      { method: 'DELETE' })
      .then(response => console.log(response))
      .catch(error => this.setState({ error, isLoading: false }))
      .then(() => {
        //this logic should be changed
        const { cartItems } = this.state;
        cartItems.forEach((product: IProduct, index: number) => {
          if (product.id === id) {
            cartItems.splice(index, 1);
          }
        });
        this.setState({ cartItems });
        this.fetchProducts()
      }) //return promise
      .then(() => this.props.history.replace(`${PRODUCTS_PATH}`)); //execute promise
  }

  //Just for testing
  createNewOrder() {
    //post body data 
    const { mockOrder } = this.state;
    //request options
    const options = {
      method: 'POST',
      body: JSON.stringify(mockOrder),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(`${BACKEND_API}${ORDERS_PATH}`, options)
      .then(response => response.text())
      .then((response) => {
        console.log(response);
      })
      .then(() => this.props.history.replace(`${PRODUCTS_PATH}`));
  }
}

export default App;
