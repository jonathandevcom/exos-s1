import React from 'react';
import './App.css';
import Tp1Page from '../pages/tp1.page';
import Layout from '../components/Layout.component';

import { Route, Routes } from 'react-router'


const App = () => {

  return (
    <Layout>
      <Routes>
        
        <Route path='/'
          element={<Tp1Page />} />
        
        
      </Routes>
    </Layout>
    
  )
}

export default App