// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;



