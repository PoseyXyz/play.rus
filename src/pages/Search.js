import React, {useState, useEffect, useContext} from 'react';
import {FaSearch} from 'react-icons/fa'
import Card from '../components/Card';
import { GameContext } from '../Context';
import svg from '../images/notfound/emoji.svg'


function Search(props) {
    // const [data, setData] = useState({
    //     searchString:''
    // })
    // const onChange=(e)=>{
    //     const name = e.currentTarget.name
    //     const value = e.currentTarget.value
    //     setData({
    //         ...data,
    //         [name]:value
    //     })
    // }
    const {formData, onChange, searchResults, parsePlatform, parseRatingColour} = useContext(GameContext)
    
    return (
        <div className='w-full relative'>
            <div className='form-group flex justify-center w-full'>
               <div className='relative flex w-full'>
               <input name="searchString"
                 value={formData.searchString}
                 onChange={(e)=>onChange(e)}
                 placeholder="Search for games"
                 className="rounded-3xl outline-none focus:bg-white text-sm focus:text-black delay-75 duration-500 bg-black-v3 w-full py-4 px-12"
                 />
                 <i className='absolute left-4 text-lg self-center text-brand-purple'><FaSearch/></i>
               </div>
               
            </div>
            <div className='bg-black-v3 h-36 w-full absolute my-2 rounded-xl'>
                {searchResults.results(result=>{
                   <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour}/>
                })}
</div>
           
            {/* {
                data.searchString.length===0? <div className='flex justify-center flex-col my-4 items-center lg:text-lg'>
                <img src={svg} className="h-1/3 w-1/3" alt="Not found in library emoji" />
                <p>Seems like there are no games here</p>
            </div>:<p>{data.searchString}</p>
            } */}
</div>
    );
}

export default Search;