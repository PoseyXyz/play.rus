
import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
import NotFound from './pages/404';
import Loader from './components/Loader';
// import Explore from './pages/Explore';
//lazy loading page routes
const Explore = lazy(() => import('./pages/Explore'));
const Recents = lazy(() => import('./pages/Recents'));
const Library = lazy(() => import('./pages/Library'))
const Genres = lazy(() => import('./categories/Genres'))
const Developers = lazy(() => import('./categories/Developers'))
const Stores = lazy(() => import('./categories/Stores'))
const Platforms = lazy(() => import('./categories/Platforms'))
const GamesList = lazy(() => import('./categories/GamesList'))
const Details = lazy(()=>import('./pages/Details'))
const ChatPage = lazy(()=>import('./pages/ChatPage'))

function App() {
  return (
    //React suspense to display fallback component on page load
    <Suspense fallback={<Loader/>}> 
      {/* declaration of all route pathss */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Explore />} />
          <Route path="explore/:pageNumber" element={<Explore />} />
          <Route path="recents" element={<Recents />} />
          <Route path="library" element={<Library />} />
          <Route path='genres' element={<Genres />}></Route>
         
          <Route path='developers' element={<Developers />} />
          <Route path="stores" element={<Stores />} />
          <Route path='platforms' element={<Platforms />} />
          <Route path='/chat' element={<ChatPage/>}/>
          <Route path="/games/:category/:pageNumber" element={<GamesList />} />
          <Route path='/details/:slug' element={<Details/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
