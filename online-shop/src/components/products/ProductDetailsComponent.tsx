import React, { SyntheticEvent } from 'react';

import './ProductDetailsComponent.scss';

import { BACKEND_API } from '../../constants';
import { ControlButton } from '../utils/ControlButton';
import { IconControlButton } from '../utils/IconControlButton';
import { Link } from 'react-router-dom';

interface IProps {
    match: any,
}

interface IState {
    product: any,
    isFetching: boolean,
    error: any,
}

export default class ProductDetails extends React.Component<IProps, IState> {
    private shoppingCartArr: any = [];
    constructor(props: IProps) {
        super(props);
        this.state = {
            product: null as any,
            isFetching: true,
            error: null,
         };
    }

    componentDidMount() {
        fetch(`${BACKEND_API}${this.props.match.url}`)
            .then(response => response.json())
            .then(result => {
                this.setState({ product: result, isFetching: false })
            })
            .catch(error => this.setState({ error, isFetching: false }));
    }


    addToShoppingCart(product: any, e: SyntheticEvent): void {
        this.shoppingCartArr.push(product);
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
                           <Link to='/orders'>                           
                                 <IconControlButton buttonName='is-success' buttonTitle='Add to shopping cart'
                                    iconTitle='fas fa-shopping-cart' clickEvent={(e: SyntheticEvent) => this.addToShoppingCart(product, e)} /> 
                             </Link>
                            <ControlButton name='is-info'
                                title='EDIT' />
                            <IconControlButton buttonName='is-primary is-outlined'
                                buttonTitle='DELETE'
                                iconName='is-small'
                                iconTitle='fas fa-times' />

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
