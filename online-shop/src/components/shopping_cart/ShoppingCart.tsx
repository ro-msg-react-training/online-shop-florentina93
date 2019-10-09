import React from 'react';
import { ControlButton } from '../utils/ControlButton';


export default class ShoppingCart extends React.Component {
    render() { 
        //console.log(this.props);
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
                    <tr>
                        <td>{'Category test'}</td>
                        <td>{'Name test'}</td>
                        <td>{'Price test'} RON</td>
                        <td>{'Quantity test'}</td>
                        <td>
                            <span className='icon'>
                                <i className='fas fa-times' />
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}
