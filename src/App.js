import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './layouts/Layout';
import Favorites from './pages/Favorites';
import TeaIdPage from './pages/TeaIdPage';
import Cart from './pages/Cart';
import CatalogTea from './pages/CatalogTea';
import SearchProvider from './providers/SearchProvider';
import NotFound from './components/not-found/NotFound';

const App = () => {

    return (
        <div className='wrapper'>
          <SearchProvider>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/:id' element={<TeaIdPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/' element={<CatalogTea />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
          </SearchProvider>
        </div>
    )
}

export default App;

