import React, {useEffect, useContext, setState } from 'react';
import { GameContext } from '../Context';

function Genres(props) {
    const {getGenres, genres} = useContext(GameContext)
    useEffect(()=>{
        getGenres()
    }, [genres])
    return (
        <div>
           {genres.map(genre=><h1>{genre.name}</h1>)} 
        </div>
    );
}

export default Genres;