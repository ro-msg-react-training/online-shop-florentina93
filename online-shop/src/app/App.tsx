import React from 'react';

import Products from '../components/product/ProductsComponent';
import productsJson from '../model/products.json';
import { Route, Switch } from 'react-router-dom';

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
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/products' render={() => <Products data={data} />} />
    </Switch>
  </div>
)

const Home = () => (
  <h1>Home Page</h1>
);

export default App;
