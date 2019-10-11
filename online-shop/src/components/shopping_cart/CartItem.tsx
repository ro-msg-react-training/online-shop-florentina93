import React from 'react';
import { IProduct } from '../../types';

export function CartItem({ data }: { data: IProduct }) {
    return (
        <tr>
            <td>{data.category}</td>
            <td>{data.name}</td>
            <td>{data.price} RON</td>
            <td>{'Quantity test'}</td>
            <td>
                <span className='icon'>
                    <i className='fas fa-times' />
                </span>
            </td>
        </tr>
    );
}