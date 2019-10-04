import React from 'react';

import { IProduct } from '../../app/App';
import { ControlButton } from '../utils/ControlButton';
import { IconControlButton } from '../utils/IconControlButton';


interface IProps {
    data: IProduct
}

export default class ProductDetails extends React.Component<IProps> {
    render() {
        return (
            <section className='section'>
                <nav className="navbar is-transparent">
                    <div className='navbar-start'>
                        <p className='subtitle is-5'>
                            <strong>Product: {this.props.data.name}</strong>
                        </p>
                    </div>
                    <div className="navbar-end">
                        <div className="field is-grouped">
                            <ControlButton name='is-info'
                                title='EDIT' />
                            <IconControlButton buttonName='is-danger is-outlined'
                                buttonTitle='DELETE'
                                iconName='is-small'
                                iconTitle='fas fa-times' />
                        </div>
                    </div>
                </nav>
                <img src={this.props.data.image} alt={this.props.data.name} />
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.props.data.name}</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>{this.props.data.category}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{this.props.data.price} RON</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{this.props.data.description}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
