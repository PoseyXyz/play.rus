import React, { useEffect, useContext } from 'react';
import { GameContext } from '../Context';
import MiniCard from './MiniCard';

function Developers(props) {
    const { fetchDevelopers, categoryList: { developers }, fetchGamesList, setPageType } = useContext(GameContext)
    useEffect(() => {
        fetchDevelopers()
        setPageType('developers')
    }, [])
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {developers && developers.map(developer => (
                    <MiniCard key={developer.id} result={developer} fetchGamesList={fetchGamesList} type={'developers'}/>
                ))}
            </div>
        </div>
    );
}

export default Developers;