import React from "react";
import './ProductsComponent.css';

import { IProduct } from "../../app/App";
import { Product } from "./Product";

export function ProductList({data}: {data: IProduct[]}) {
    return (
      <div className='Products-div'>
        <h1>Products</h1>
        <table className='Products-table'>
          <thead>
            <tr className='Products-tr'>
              <th className='Products-td-th'>Category</th>
              <th className='Products-td-th'>Product Name</th>
              <th className='Products-td-th'>Price</th>
              <th className='Products-td-th'></th>
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