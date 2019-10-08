import React from 'react';
import { IProduct } from '../../app/App';
import { Link } from 'react-router-dom';

export function Product({data}: {data: IProduct}) {
    return (
      <tr>
        <td>{data.category}</td>
        <td>{data.name}</td>
        <td>{data.price} RON</td>
        <td>       
          <Link to={`/products/${data.id}`}>{'>'}</Link>
        </td>
      </tr>
    );
}