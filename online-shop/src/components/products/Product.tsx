import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../types';
import { PRODUCTS_PATH, ROOT } from '../../constants';

export function Product({data}: {data: IProduct}) {
    return (
      <tr>
        <td>{data.category}</td>
        <td>{data.name}</td>
        <td>{data.price} RON</td>
        <td>       
          <Link to={`${PRODUCTS_PATH}${ROOT}${data.id}`}>{'>'}</Link>
        </td>
      </tr>
    );
}