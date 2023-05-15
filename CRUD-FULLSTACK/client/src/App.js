import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import AppRoutes from './components/AppRoutes';
import Loader from './components/Loader';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
