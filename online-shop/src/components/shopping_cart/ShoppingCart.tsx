import React from 'react';
import { ControlButton } from '../utils/ControlButton';
import { IProduct } from '../../types';

interface IProps {
    items: IProduct[],
}

export default class ShoppingCart extends React.Component<IProps> {
    render() {
        if (this.props.items) {
            console.log(this.props.items);
        }
        return (
            <div className='section'>
                <nav className="navbar is-transparent">
                    <div className='navbar-start'>
                        <p className='subtitle is-5'>
                            <strong>Shopping Cart</strong>
                        </p>
                    </div>
                    <div className="navbar-end">
                        <div className="field is-grouped">
                            <ControlButton name='is-info'
                                title='CHECKOUT' />
                        </div>
                    </div>
                </nav>
                <table className='table is-bordered is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((product: IProduct) =>
                            <tr>
                                <td>{product.category}</td>
                                <td>{product.name}</td>
                                <td>{product.price} RON</td>
                                <td>{'Quantity test'}</td>
                                <td>
                                    <span className='icon'>
                                        <i className='fas fa-times' />
                                    </span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
