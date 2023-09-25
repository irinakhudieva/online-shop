import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './layouts/Layout';
import Favorites from './pages/Favorites';
import TeaIdPage from './pages/TeaIdPage';
import Cart from './pages/Cart';
import CatalogTea from './pages/CatalogTea';

const App = () => {
    return (
        <div>
            <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Layout />} >
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/catalog-tea/:id' element={<TeaIdPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/catalog-tea' element={<CatalogTea />} />
                  </Route>
              </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

