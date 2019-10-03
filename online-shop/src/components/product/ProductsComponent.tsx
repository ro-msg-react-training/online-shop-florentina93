import React from 'react';
import { IProduct } from '../../app/App';

import { ProductList } from './ProductList';

interface IProps {
  data: IProduct[]
}

export default class Products extends React.Component<IProps> {
  render() {
    return (
      <ProductList data={this.props.data} />
    );
  }
}
