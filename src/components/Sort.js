import React, {useState, useContext, useEffect} from 'react';
import { GameContext } from '../Context';


function Sort(props) {
   
    const {sortGames, onChange, formData} = useContext(GameContext)
   

    const sortOptions = [{
        title: 'Name',
        value: 'name'
    },
    {
        title: 'Released',
        value: 'released'
    },
    {
        title: 'Rating',
        value: 'rating'
    }]
    useEffect(()=>{
        sortGames(formData.sortValue)
    }, [formData.sortValue])
    return (
        <div className='flex items-center my-4 text-lg'>
           <div className='form-group flex gap-3 items-center'>
                <label className="font-light">
                    Sort By:
                </label>
                <select className='bg-black-v3 outline-none font-semibold py-2 pl-2 pr-5 rounded-lg' name='sortValue' onChange={(e)=>{onChange(e)}}>
                <option value="relevance">Relevance</option>
                {sortOptions.map(option=><option 
                className='p-4 bg-white text-black'
                key={option.title}
                value={option.value}
            >{option.title}</option>)}
            </select>
           </div>
        </div>
    );
}

export default Sort;