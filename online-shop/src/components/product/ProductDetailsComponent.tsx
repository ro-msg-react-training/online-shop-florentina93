import React from 'react';

import './ProductDetailsComponent.css';
import { IProduct } from '../../app/App';


interface IProps {
    data: IProduct
}

export default class ProductDetails extends React.Component<IProps> {
    render() {
        return (
            <section className='ProductDetails-section'>
                <h2>Product: {this.props.data.name}</h2>
                <img src={this.props.data.image} alt={this.props.data.name} />
                <table className='ProductDetails-table'>
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




