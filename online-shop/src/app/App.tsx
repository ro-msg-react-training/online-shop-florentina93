import React from 'react';

import Products from '../components/product/ProductsComponent';
import { Route, Redirect } from 'react-router-dom';
import { PRODUCTS_PATH, SIMPLE_SLASH } from '../constants';

const App: React.FC = () => (
  <div>
    <Redirect exact from={SIMPLE_SLASH} to={PRODUCTS_PATH} />
    <Route path={PRODUCTS_PATH} component={Products} />
  </div>
);

export default App;
