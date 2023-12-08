import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './layouts/Layout';
import Favorites from './pages/Favorites';
import CosmeticsIdPage from './pages/CosmeticsIdPage';
import CatalogCosmetics from './pages/CatalogСosmetics';
import Cart from './pages/Cart';
import SearchProvider from './providers/SearchProvider';
import NotFound from './components/not-found/NotFound';

const App = () => {

    return (
        <div className='wrapper'>
          <SearchProvider>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/:id' element={<CosmeticsIdPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/' element={<CatalogCosmetics />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
          </SearchProvider>
        </div>
    )
}

export default App;

