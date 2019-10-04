import React from 'react';

import { IProduct } from "../../app/App";
import { Product } from "./Product";
import { ControlButton } from '../utils/ControlButton';
import { IconControlButton } from '../utils/IconControlButton';

export function ProductList({ data }: { data: IProduct[] }) {
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
              iconTitle='fas fa-shopping-cart' />
            <ControlButton name='is-info'
              title='ADD' />
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