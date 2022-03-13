import React, {useEffect, useContext, setState } from 'react';
import { GameContext } from '../Context';
import MiniCard from './MiniCard';

function Genres(props) {
    const {getGenres, genres} = useContext(GameContext)
    useEffect(()=>{
        getGenres()
    }, [])
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-3 gap-4'>
            {genres && genres.results.map(genre=>(
               <MiniCard result={genre}/>
           ))} 
            </div>
        </div>
    );
}

export default Genres;