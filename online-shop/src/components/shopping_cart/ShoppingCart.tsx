import React from 'react';
import { ControlButton } from '../utils/ControlButton';
import { IProduct } from '../../types';
import { CartItem } from './CartItem';

interface IProps {
    items: IProduct[],
    onCheckoutClick: () => void
}

export default class ShoppingCart extends React.Component<IProps> {
    render() {
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
                                title='CHECKOUT' clickEvent={() => this.createNewOrder()} />
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
                           <CartItem key={product.id} data={product} />)}
                    </tbody>
                </table>
            </div>
        );
    }
    createNewOrder() {
        this.props.onCheckoutClick();
        console.log('Shopping Cart checkout');
    }
}
