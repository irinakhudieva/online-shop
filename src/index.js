import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { persistor, store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
          <Provider store={store} >
            <App />
          </Provider>
        </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
