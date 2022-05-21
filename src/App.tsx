import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Header from './Components/Header';
import Products from './Components/Products';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import './index.css';
import {store, persistor} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}/>
      <Header/>
      <Products/>
    </Provider>
  );
}

export default App;
