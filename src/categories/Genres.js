import React, {useEffect, useContext, setState } from 'react';
import { GameContext } from '../Context';

function Genres(props) {
    const {getGenres, genres} = useContext(GameContext)
    useEffect(()=>{
        getGenres()
    }, [])
    return (
        <div className='outlet-layout'>
           {genres && genres.results.map(genre=><div>
            <h1>{genre.name}</h1>
            <p>{genre.games_count}</p>
            <img src={genre.image_background}/>
           </div>)} 
        </div>
    );
}

export default Genres;