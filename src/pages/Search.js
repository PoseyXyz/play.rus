import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { GameContext } from '../Context';

function Search() {
    const { formData, setFormData, onChange, searchResults, parsePlatformIcons, searchSpinner } = useContext(GameContext)

    return (
        <div className={`${formData.searchString.length===0?'relative':' absolute left-0 lg:relative z-20'} w-full`}>
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
            <div className={`${formData.searchString.length === 0 ? 'hidden' : 'flex'} bg-black-v3 w-full absolute my-2 chat-history overflow-y-auto rounded-xl p-4 flex-col gap-2`}>
                {searchSpinner ? <Loader/> : searchResults ? searchResults.results.map(result => {
                    const { id, slug, background_image, name, parent_platforms } = result
                    return <Link to={`/details/${slug}`} key={id} onClick={()=>setFormData({...formData, searchString:''})} className='flex gap-3 py-2 items-center border-b-2 hover:border-brand-purple delay-75 duration-200'>
                        <div className=''><img className='rounded-md w-16 h-16' src={background_image} alt='search result'/></div>
                        <div className='flex flex-col gap-2'>
                            <p className="">{name}</p>
                            <div className="flex gap-3">
                                {parent_platforms.map(platform => <i key={platform.platform.name} className='text-typography-white'>{parsePlatformIcons(platform.platform.name)}</i>)}
                            </div>
                        </div>
                    </Link>
                }) : <p>Could not find any games that match</p>}

            </div>
        </div>
    );
}

export default Search;