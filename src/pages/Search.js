import React, { useState, useEffect, useContext } from 'react';
import { FaSearch } from 'react-icons/fa'
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
    const { formData, onChange, searchResults, parsePlatform, parseRatingColour, searchSpinner } = useContext(GameContext)

    return (
        <div className='w-full relative'>
            <div className='form-group flex justify-center w-full'>
                <div className='relative flex w-full'>
                    <input name="searchString"
                        value={formData.searchString}
                        onChange={(e) => onChange(e)}
                        placeholder="Search for games"
                        className="rounded-3xl outline-none focus:bg-white text-sm focus:text-black delay-75 duration-500 bg-black-v3 w-full py-4 px-12"
                    />
                    <i className='absolute left-4 text-lg self-center text-brand-purple'><FaSearch /></i>
                </div>

            </div>
            <div className={`${formData.searchString.length === 0 ? 'hidden' : 'flex'} bg-black-v3 w-full absolute my-2 rounded-xl p-4 flex-col gap-2`}>
                {searchSpinner ? <p className="text-white text-xl">Please wait...</p> : searchResults ? searchResults.results.map(result => {
                    const { id, background_image, name, parent_platforms } = result
                    return <div key={id} className='flex gap-3 py-2 items-center'>
                        <div className='w-16 h-full'><img className='rounded-md' src={background_image}/></div>
                        <div className='self-start'>
                            <h1 className="text-lg">{name}</h1>
                            <div className="flex gap-3 text-lg">
                                {parent_platforms.map(platform => <i className='text-typography-white'>{parsePlatform(platform.platform.name)}</i>)}
                            </div>
                        </div>
                    </div>
                }) : <p>Could not find any games that match</p>}

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