import React, { useEffect, useContext } from 'react';
import { GameContext } from '../Context';
import MiniCard from './MiniCard';

function Platforms(props) {
    const { fetchPlatforms, categoryList: { platforms } } = useContext(GameContext)
    useEffect(() => {
        fetchPlatforms()
    }, [])
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {platforms && platforms.map(genre => (
                    <MiniCard key={genre.id} result={genre} />
                ))}
            </div>
        </div>
    );
}

export default Platforms;