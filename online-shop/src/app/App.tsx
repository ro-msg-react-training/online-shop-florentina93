import React from 'react';

import 'bulma/css/bulma.css';
//import '../styles/css/mystyles.css';

import ProductDetails from '../components/product/ProductDetailsComponent';
import Products from '../components/product/ProductsComponent';
import productsJson from '../model/products.json';

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
    <ProductDetails data={data[0]} />
    <Products data={data} />
  </div>
)

export default App;
