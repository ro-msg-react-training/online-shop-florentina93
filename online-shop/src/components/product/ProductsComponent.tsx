import React from 'react';
import { IProduct } from '../../app/App';

import { ProductList } from './ProductList';
import { Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductDetailsComponent';


interface IProps {
  data: IProduct[]
}

export default class Products extends React.Component<IProps> {
  render() {
    return (
      <Switch>
        <Route path='/products' exact render={() => <ProductList data={this.props.data} />} />
        <Route path='/products/:id' component={ProductDetails} />
      </Switch>
    );
  }
}
