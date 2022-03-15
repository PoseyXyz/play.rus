import React, { useEffect, useContext, setState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GameContext } from '../Context';
import MiniCard from './MiniCard';

function Genres(props) {
    const { fetchGenres, categoryList: { genres }, fetchGamesList } = useContext(GameContext)
    useEffect(() => {
        fetchGenres()
    }, [])
    return (
        <div className='outlet-layout'>
            <Link to='games'>
            Got to the fucking page
            </Link>
            <Outlet/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {genres && genres.map(genre => (
                    <MiniCard key={genre.id} result={genre} fetchGamesList={fetchGamesList} />
                ))}
            </div>
        </div>
    );
}

export default Genres;