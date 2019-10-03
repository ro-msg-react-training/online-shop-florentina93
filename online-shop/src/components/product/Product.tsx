import React from 'react';
import { IProduct } from "../../app/App";


export function Product({data}: {data: IProduct}) {
    return (
      <tr className='Products-tr'>
        <td className='Products-td-th'>{data.category}</td>
        <td className='Products-td-th'>{data.name}</td>
        <td className='Products-td-th'>{data.price} RON</td>
        <td className='Products-td-th'>{'>'}</td>
      </tr>
    );
}