import { useState } from 'react';
import './App.css';
import { HomePage, Tp1Page, Tp2Page } from '../pages';
import Layout from '../components/tp1.component.tsx/Layout.component';

import { Route, Routes } from 'react-router';
import * as MOCK_POSTS from '../datas/exo1.data';


const App = () => {

  const [dataTp1, setDataTp1] = useState([MOCK_POSTS])

  return (
    <Layout>

      <Routes>
        <Route path='/'
            element={<HomePage />} />  
        <Route path='/tp1'
          element={<Tp1Page {...dataTp1}/>} />
        <Route path='/tp2'
          element={<Tp2Page />} />
      </Routes>

    </Layout>
    
  )
}

export default App