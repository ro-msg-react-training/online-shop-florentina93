import React from 'react';
import { IProduct } from '../../app/App';


export function Product({data}: {data: IProduct}) {
    return (
      <tr>
        <td>{data.category}</td>
        <td>{data.name}</td>
        <td>{data.price} RON</td>
        <td>{'>'}</td>
      </tr>
    );
}