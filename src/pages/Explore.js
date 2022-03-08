import React, { useContext } from 'react';
import { FaAndroid, FaApple, FaAppStoreIos, FaCalendar, FaCheck, FaClock, FaLinux, FaPlaystation, FaPlus, FaPlusSquare, FaWindows, FaXbox } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GameContext } from '../Context';

function parsePlatform(platform) {

    if (platform === "PC") {
        return <FaWindows />
    } else if (platform === "PlayStation") {
        return <FaPlaystation />
    } else if (platform === "Apple Macintosh") {
        return <FaApple />
    } else if (platform === "Linux") {
        return <FaLinux />
    } else if (platform === "Android") {
        return <FaAndroid />
    } else if (platform === "iOS") {
        return <FaAppStoreIos />
    } else if (platform === "Xbox") {
        return <FaXbox />
    }
}

function parseRatingColour(color) {
    if (color < 3) {
        return 'border-red-500 text-red-500'
    } else if (color >= 4) {
        return 'border-green-500 text-green-500'
    } else {
        return 'border-yellow-500 text-yellow-500'
    }
}

function Explore(props) {
    const { test, currentPage, setCurrentPage, paginationRange, spinner } = useContext(GameContext)
    let params = useParams()
    let navigate = useNavigate()

    return (
        <div className="col-span-10 md:col-span-7 bg-black-v2 rounded-3xl mt-20 p-4 text-typography-white">
            
            {spinner ? <p className="text-white text-7xl">Please wait...</p>:
<>
            <h1>{params.pageNumber}</h1>
           
            <button onClick={()=>{setCurrentPage(2); navigate(`/explore/${2}`)}}>Go to Page 2</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {test && test.results.map(result => {
                    const { background_image, name, parent_platforms, rating, released, playtime } = result
                    return (
                        <div className="card bg-black-v3 rounded-xl">
                            <div className="overflow-hidden h-2/4">
                                <img className="rounded-t-xl h-full w-screen" src={background_image} />
                            </div>
                            <div className="flex flex-col gap-5 px-6 py-4 bottom">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-lg">{name}</h1>
                                        <div className={`${parseRatingColour(rating)} border-2 py-1 px-2 rounded-md text-sm`}><p className="font-semibold">{rating}</p></div>
                                    </div>


                                    <div className="flex gap-3 text-lg">
                                        {parent_platforms.map(platform => <div className="text-typography-white">
                                            <i>{parsePlatform(platform.platform.name)}</i>
                                        </div>)}
                                    </div>
                                </div>

                                <div className="flex justify-between border-y border-typography-grey py-4">
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
                                    <button className="bg-brand-purple w-full group flex items-center font-medium text-base justify-center gap-2 text-white rounded-md p-4 hover:bg-typography-grey delay-75 duration-300"><p className="text-sm">Add to Library</p><i className="group-hover:animate-pulse"><FaPlus /></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
           <div className="w-full flex items-center justify-center my-4 px-4">
           <div className="flex gap-4">
            {paginationRange.map(range=>{
              return range === "..." ? <p className="text-white text-lg self-center">...</p>
                :
                <button onClick={()=>{setCurrentPage(range); navigate(`/explore/${range}`)}} className={`${currentPage===range?'text-white bg-brand-purple':'text-white'} text-lg py-2 px-4 rounded-lg hover:text-brand-purple duration-100`}>{range}</button>
            })}
            </div>
           </div>
            </>
}
        </div>
    );
}

export default Explore;