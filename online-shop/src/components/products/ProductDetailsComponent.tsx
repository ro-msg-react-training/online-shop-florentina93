import React, { SyntheticEvent } from 'react';

import './ProductDetailsComponent.scss';

import { BACKEND_API, PRODUCTS_PATH } from '../../constants';
import { ControlButton } from '../utils/ControlButton';
import { IconControlButton } from '../utils/IconControlButton';
import { IProduct } from '../../types';

interface IProps {
    id: any,
    onAddToCartClick: (product: IProduct) => void,
    onDeleteProductClick: (id: number) => void
}

interface IState {
    product: IProduct,
    isFetching: boolean,
    error: any,
}

export default class ProductDetails extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            product: {} as any,
            isFetching: true,
            error: null,
        };
    }

    componentDidMount() {
        fetch(`${BACKEND_API}${PRODUCTS_PATH}/${this.props.id}`)
            .then(response => response.json())
            .then(result => {
                this.setState({ product: result, isFetching: false })
            })
            .catch(error => this.setState({ error, isFetching: false }));
    }

    render() {
        const { product, isFetching, error } = this.state;
        if (error) {
            return <p>{error.message}</p>
        }

        if (isFetching) {
            return <p>Fetching data ....</p>
        }

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
                                iconTitle='fas fa-shopping-cart' clickEvent={(e: SyntheticEvent) => this.addToShoppingCart(product)} />
                            <ControlButton name='is-info'
                                title='EDIT' />
                            <IconControlButton buttonName='is-primary is-outlined'
                                buttonTitle='DELETE'
                                iconName='is-small'
                                iconTitle='fas fa-times' clickEvent={() => this.deleteProduct(product.id)} />
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
    addToShoppingCart(product: IProduct): void {
        this.props.onAddToCartClick(product);
        alert('Add to cart' + product.name);
    }

    deleteProduct(id: number) {
        this.props.onDeleteProductClick(id);
        alert('Product was deleted ' + id);
    }
}
