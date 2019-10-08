import React from 'react';

import { IProduct } from "../../app/App";
import { Product } from "./Product";
import { ControlButton } from '../utils/ControlButton';
import { IconControlButton } from '../utils/IconControlButton';



export function ProductList({ data }: { data: IProduct[] }) {
  function handleClick(e: any) {
    e.preventDefault();
    console.log('The button was clicked!');
  }
  return (
    <div className='section'>
      <nav className="navbar is-transparent">
        <div className='navbar-start'>
          <p className='subtitle is-5'>
            <strong>Products</strong>
          </p>
        </div>
        <div className="navbar-end">
          <div className="field is-grouped">
            <IconControlButton buttonName='is-info'
              iconTitle='fas fa-shopping-cart' clickEvent={handleClick} />
            <ControlButton name='is-info'
              title='ADD' clickEvent={handleClick} />
          </div>
        </div>
      </nav>
      <table className='table is-bordered is-fullwidth'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((product: IProduct) =>
            <Product key={product.id} data={product} />)}
        </tbody>
      </table>
    </div>
  );
}