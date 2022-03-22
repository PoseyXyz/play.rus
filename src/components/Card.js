import React, { useContext, } from 'react';
import { FaCalendar, FaClock, FaPlus, FaTimesCircle, FaCheck } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { GameContext } from '../Context';


function Card({ result, parsePlatformIcons, parseRatingColour }) {
    const { id, slug, background_image, name, parent_platforms, rating, released, playtime, libraryOptionsOpen, section, inLibrary } = result
    const { parseRecents, addToLibrary, librarySections, toggleLibraryOptions, removeFromLibrary } = useContext(GameContext)

    return (
        <div className="card bg-black-v3 h-[calc(100vh_/_1.55)] md:h-[calc(100vh_/_1.9)] rounded-xl relative">
            
            <div className="overflow-hidden h-2/4">
                <LazyLoadImage
                    className="rounded-t-xl h-full w-screen object-cover"
                    height={'100%'}
                    alt='gameCard_image'
                    effect="blur"
                    src={background_image} />
                {/* <img src={background_image} /> */}
            </div>
            <div className="flex flex-col gap-5 px-6 py-4 bottom">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <Link to={`/details/${slug}`} onClick={()=>parseRecents(result)} className="text-lg hover:text-typography-grey duration-100">{name}</Link>
                        <div className={`${parseRatingColour(rating)} border-2 py-1 px-2 rounded-md text-sm`}><p className="font-semibold">{rating}</p></div>
                    </div>


                    <div className="flex flex-wrap gap-3 text-lg">
                        {parent_platforms.map(platform => <div key={platform.platform.name} className="text-typography-white">
                            <i>{parsePlatformIcons(platform.platform.name)}</i>
                        </div>)}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-between border-y border-typography-grey py-4">
                    <div className="">
                        <div className="flex gap-2 items-center text-sm"><i className="text-brand-purple text-lg"><FaCalendar /></i>
                            <div className="flex flex-col">
                                <p className="text-typography-grey">Release date:</p>
                                <p className="text-white">{released}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2 items-center text-sm"><i className="text-brand-purple text-lg"><FaClock /></i>
                            <div className="flex flex-col">
                                <p className="text-typography-grey">Playtime:</p>

                                <p className="text-white">{playtime} hrs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <button onClick={() => toggleLibraryOptions(id)} className={`${inLibrary?'bg-brand-green':'bg-brand-purple'} w-full group flex items-center font-medium text-base justify-center gap-2 text-white rounded-md p-4 hover:bg-typography-grey delay-75 duration-300`}><p className="text-sm">{inLibrary?'Added to Library': "Add to Library"}</p>{inLibrary?<i className="group-hover:animate-pulse"><FaCheck /></i>: <i className="group-hover:animate-pulse"><FaPlus /></i>}</button>
                </div>
            </div>
            <div className={`${libraryOptionsOpen ? 'flex' : 'hidden'} absolute bg-white z-20 text-black flex-col w-full rounded-lg -bottom-24`}>
                <button onClick={() => toggleLibraryOptions(id)} className="text-left text-red-500 font-semibold py-3 px-6 text-base justify-self-end self-end border-b rounded-lg border-gray-200"><FaTimesCircle /></button>
                {Object.keys(librarySections).map((key, index) => (<button key={index} onClick={() => { addToLibrary(id, key); toggleLibraryOptions(id) }} className={`${inLibrary ? 'hidden' : 'block'} capitalize text-left py-3.5 px-6 text-sm w-full border-b rounded-lg duration-300 delay-75 hover:bg-gray-100 border-gray-200`}>{key}</button>))}
                <button onClick={() => {removeFromLibrary(id, section); toggleLibraryOptions(id)}} className="text-left text-red-500 font-semibold py-4 px-6 text-sm w-full border-b rounded-lg border-gray-200">Remove from Library {section}</button>
            </div>

        </div>

    );
}

export default Card;

