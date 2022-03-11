import React, {useState} from 'react';


function Sort(props) {
    const [data, setData] = useState({
        sortValue: '',
    });
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
    return (
        <div className='text-red-500'>
            <select name='sortValue' onChange={(e)=>onChange(e)}>{options.map(option=><option
                key={option.name}
                value={option.value}
            >{option.title}</option>)}</select>
            <p>{data.sortValue}</p>
        </div>
    );
}

export default Sort;