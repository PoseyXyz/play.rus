import React, {useState, useEffect} from 'react';
import {FaSearch} from 'react-icons/fa'


function Search(props) {
    const [data, setData] = useState({
        searchString:''
    })
    const onChange=(e)=>{
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        setData({
            ...data,
            [name]:value
        })
    }
    useEffect(()=>{
        
    }, [data])
    return (
        <div className='outlet-layout'>
            <div className='form-group flex justify-center'>
               <div className='w-5/6 relative flex'>
               <input name="searchString"
                 value={data.searchString}
                 onChange={(e)=>onChange(e)}
                 placeholder="Search for games"
                 className="rounded-3xl outline-none focus:bg-white focus:text-black delay-75 duration-500 bg-black-v3 w-full py-4 px-12"
                 />
                 <i className='absolute left-4 text-lg self-center text-brand-purple'><FaSearch/></i>
               </div>
            </div>
        </div>
    );
}

export default Search;