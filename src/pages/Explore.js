import React, { useContext, useEffect } from 'react';
import { FaAndroid, FaApple, FaAppStoreIos, FaCalendar, FaCheck, FaClock, FaLinux, FaPlaystation, FaPlus, FaPlusSquare, FaWindows, FaXbox } from 'react-icons/fa';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { GameContext } from '../Context';
import Card from '../components/Card';

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

            {spinner ? <p className="text-white text-7xl">Please wait...</p> :
                <>
                    <h1>{params.pageNumber}</h1>

                    <button onClick={() => { setCurrentPage(2); navigate(`/explore/${2}`) }}>Go to Page 2</button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                        {test && test.results.map(result => {
                           
                            return (
                                    <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour}/>
                                )
                        })}

                    </div>
                    <div className="w-full flex items-center justify-center my-4 px-4">
                        <div className="flex gap-4">
                            {paginationRange.map(range => {
                                return range === "..." ? <p className="text-white text-lg self-center">...</p>
                                    :
                                    <button onClick={() => { setCurrentPage(range); navigate(`/explore/${range}`) }} className={`${currentPage === range ? 'text-white bg-brand-purple' : 'text-white'} text-lg py-2 px-4 rounded-lg hover:text-brand-purple duration-100`}>{range}</button>
                            })}
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Explore;