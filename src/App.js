
import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
import NotFound from './components/NotFound';
const Explore = lazy(() => import('./pages/Explore'));
const Recents = lazy(() => import('./pages/Recents'));
const Library = lazy(() => import('./pages/Library'))
const Genres = lazy(() => import('./categories/Genres'))
const Developers = lazy(() => import('./categories/Developers'))
const Stores = lazy(() => import('./categories/Stores'))
const Platforms = lazy(() => import('./categories/Platforms'))
const GamesList = lazy(() => import('./categories/GamesList'))


function App() {

  return (
    <Suspense fallback={<h1 className="text-green-700 text-7xl">Loading...</h1>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Explore />} />
          <Route path="explore/:pageNumber" element={<Explore />} />
          <Route path="recents" element={<Recents />} />
          <Route path="library" element={<Library />} />
          <Route path='genres' element={<Genres />}></Route>
          <Route path="/genres/:category" element={<GamesList />} />
          <Route path='developers' element={<Developers />} />
          <Route path="stores" element={<Stores />} />
          <Route path='platforms' element={<Platforms />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* loading
     error page */}
      </Routes>
    </Suspense>
  );
}

export default App;
