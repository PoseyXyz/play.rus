
import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Alt from './pages/Alt';
import Layout from './pages/Layout';
import NotFound from './components/NotFound';
const Explore = lazy(()=>import('./pages/Explore'));



function App() {
  
  return (
    <Suspense fallback={<h1 className="text-green-700 text-7xl">Loading...</h1>}>
      <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Explore />} />
        <Route path="explore/:pageNumber" element={ <Explore />}>
        </Route>
        
        <Route path="alt" element={<Alt />} />
      </Route>
      <Route path="*" element={<NotFound/>} />

      {/* loading
     error page */}
    </Routes>
    </Suspense>
  );
}

export default App;
