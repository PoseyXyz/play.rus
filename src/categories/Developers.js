import React, { useEffect, useContext } from 'react';
import { GameContext } from '../Context';
import MiniCard from './MiniCard';

function Developers(props) {
    const { fetchDevelopers, categoryList: { developers }, fetchGamesList } = useContext(GameContext)
    useEffect(() => {
        fetchDevelopers()
    }, [])
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {developers && developers.map(genre => (
                    <MiniCard key={genre.id} result={genre} fetchGamesList={fetchGamesList} type={'developers'}/>
                ))}
            </div>
        </div>
    );
}

export default Developers;