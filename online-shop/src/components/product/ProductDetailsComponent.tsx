import React from 'react';

import './ProductDetailsComponent.scss';
import { IProduct } from '../../app/App';
import { ControlButton } from '../utils/ControlButton';
import { IconControlButton } from '../utils/IconControlButton';
import productsJson from '../../model/products.json';

interface IProps {
    data: IProduct,
    match: any
}

export default class ProductDetails extends React.Component<IProps> {

    handleClick(e: any) {
        e.preventDefault();
        console.log('The button was clicked!');
    }
    
    render() {
        const data: IProduct[] = Object.values(productsJson);
        const product: IProduct = data[this.props.match.params.id];
       
        return (
            <section className='section'>
                <nav className="navbar is-transparent">
                    <div className='navbar-start'>
                        <p className='subtitle is-5'>
                            <strong>Product: {product.name}</strong>
                        </p>
                    </div>
                    <div className="navbar-end">
                        <div className="field is-grouped">
                            <IconControlButton buttonName='is-success' buttonTitle='Add to shopping cart'
                                iconTitle='fas fa-shopping-cart' clickEvent={this.handleClick}/>
                            <ControlButton name='is-info'
                                title='EDIT' clickEvent={this.handleClick}/>
                            <IconControlButton buttonName='is-primary is-outlined'
                                buttonTitle='DELETE'
                                iconName='is-small'
                                iconTitle='fas fa-times'
                                clickEvent={this.handleClick} />

                        </div>
                    </div>
                </nav>
                <img src={product.image} className='image-size' alt={product.name} />
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>{product.category}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{product.price} RON</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{product.description}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
