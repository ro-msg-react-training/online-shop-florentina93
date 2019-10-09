import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { IProduct } from '../../types';
import { BACKEND_API } from '../../constants';

import { ProductList } from './ProductList';
import ProductDetails from './ProductDetailsComponent';

interface IProps {
  match: any
}

interface IState {
  data: IProduct[],
  isLoading: boolean,
  error: any
}

export default class Products extends React.Component<IProps, IState> {
 
  constructor(props: any) {
    super(props);
    this.state = { 
      data: [],
      isLoading: true,
      error: null
    };
  }
  
  componentDidMount() {
    fetch(`${BACKEND_API}${this.props.match.url}`)
    .then(response => response.json())
    .then(result => {
        this.setState({ data: result, isLoading: false })
      })
    .catch(error => this.setState({error, isLoading: false}));
  }

  render() {
    const {data, isLoading, error} = this.state;
    if(error) {
      return <p>{error.message}</p>
    }
    
    if(isLoading) {
      return <p>Loading...</p>
    }
    return (
      <Switch>
        <Route path={`${this.props.match.url}`} exact render={() => <ProductList data={data} />} />
        <Route path={`${this.props.match.url}/:id`} component={ProductDetails} />
      </Switch>
    );
  }
}
