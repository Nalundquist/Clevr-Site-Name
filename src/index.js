import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import './index.css';

const store = configureStore({ reducer: rootReducer })
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//npm install redux@4.2.0 react-redux@8.0.5 @reduxjs/toolkit
