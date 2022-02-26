import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { GameContext } from './Context';
import { Route, Router, Routes } from 'react-router-dom'
import Explore from './pages/Explore';
import Xbox from './pages/Xbox';
import Alt from './pages/Alt';
import Layout from './pages/Layout';

function App() {
  const { test } = useContext(GameContext)
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="explore" element={<Explore/>}/>
        <Route index element={<Explore/>}/>
        <Route path="alt" element={<Alt/>}/> 
        <Route path="xbox" element={<Xbox/>}/>  
      </Route>

      {/* loading
     error page */}
    </Routes>
  );
}

export default App;
