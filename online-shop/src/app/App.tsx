import React from 'react';

import Products from '../components/product/ProductsComponent';
import productsJson from '../model/products.json';
import { Route, Redirect } from 'react-router-dom';

export interface IProduct {
  id: number,
  name: string,
  category: string,
  image: string,
  price: number,
  description: string
}
const data: IProduct[] = Object.values(productsJson);

const App: React.FC = () => (
  <div>
    <Redirect exact from='/' to='/products' />
    <Route path='/products' render={() => <Products data={data} />} />
  </div>
);

export default App;
