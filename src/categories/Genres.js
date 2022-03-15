import React, { useEffect, useContext, setState } from 'react';
import { GameContext } from '../Context';
import MiniCard from './MiniCard';

function Genres(props) {
    const { fetchGenres, categoryList: { genres } } = useContext(GameContext)
    useEffect(() => {
        fetchGenres()

    }, [])
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {genres && genres.map(genre => (
                    <MiniCard key={genre.id} result={genre} />
                ))}
            </div>
        </div>
    );
}

export default Genres;