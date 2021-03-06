import React, { useEffect, useContext } from 'react';
import { GameContext } from '../Context';
import MiniCard from './MiniCard';

function Platforms(props) {
    const { fetchPlatforms, categoryList: { platforms }, fetchGamesList, setPageType } = useContext(GameContext)
    useEffect(() => {
        fetchPlatforms()
        setPageType('platforms')
    }, [])
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {platforms && platforms.map(platform => (
                    <MiniCard key={platform.id} result={platform} fetchGamesList={fetchGamesList} type={'platforms'} />
                ))}
            </div>
        </div>
    );
}

export default Platforms;