import React  from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { HomePage, Tp1Page, Tp2Page } from '../pages';
import Layout from '../components/tp1.component.tsx/Layout.component';

const App = () => {

  return (
    <Layout>

      <Routes>
        <Route path='/'
            element={<HomePage />} />  
        <Route path='/tp1'
          element={<Tp1Page />} />
        <Route path='/tp2'
          element={<Tp2Page />} />
      </Routes>

    </Layout>
    
  )
}

export default App