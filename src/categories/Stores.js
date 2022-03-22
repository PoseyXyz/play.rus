import React, { useEffect, useContext } from 'react';
import { GameContext } from '../Context';
import MiniCard from './MiniCard';

function Stores(props) {
    const { fetchStores, categoryList: { stores }, fetchGamesList, setPageType } = useContext(GameContext)
    useEffect(() => {
        fetchStores()
        setPageType('stores')
    }, [])
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {stores && stores.map(store => (
                    <MiniCard key={store.id} result={store} fetchGamesList={fetchGamesList} type={'stores'} />
                ))}
            </div>
        </div>
    );
}

export default Stores;