import React from 'react';

import Products from '../components/products/ProductsComponent';
import { Route, Redirect, Switch } from 'react-router-dom';
import { PRODUCTS_PATH, ORDERS_PATH, SIMPLE_SLASH } from '../constants';
import ShoppingCart from '../components/shopping_cart/ShoppingCart';

const App: React.FC = () => (
  <div>
    <Switch>
      <Redirect exact from={SIMPLE_SLASH} to={PRODUCTS_PATH} />
      <Route path={PRODUCTS_PATH} component={Products} />
      <Route path={ORDERS_PATH} component={ShoppingCart} />
    </Switch>
  </div>
);

export default App;
