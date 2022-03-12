import React, {useState, useContext, useEffect} from 'react';
import { GameContext } from '../Context';


function Sort(props) {
    const [data, setData] = useState({
        sortValue: '',
    });
    const {sortGames} = useContext(GameContext)
    const onChange = (e) => {
        const value = e.currentTarget.value
        const name = e.currentTarget.name
        setData({
            ...data,
            [name]: value
        })
    }

    const options = [{
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
        sortGames(data.sortValue)
    }, [data])
    return (
        <div className='text-red-500'>
            <select name='sortValue' onChange={(e)=>{onChange(e)}}>
                <option selected disabled>Relevance</option>
                {options.map(option=><option
                key={option.title}
                value={option.value}
            >{option.title}</option>)}
            </select>
            <p>{data.sortValue}</p>
        </div>
    );
}

export default Sort;