import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { GameContext } from '../Context';

function GamesList(props) {
    const { gamesList, parsePlatform, parseRatingColour, currentPage, setCurrentPage, paginationRange } = useContext(GameContext)
    let navigate = useNavigate()
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                {gamesList && gamesList.map(result => <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />)}
            </div>
            <div className="w-full flex items-center justify-center my-4 px-4">
                        <div className="flex gap-4">
                            {paginationRange.map(range => {
                                return range === "..." ? <p className="text-white text-lg self-center">...</p>
                                    :
                                    <button onClick={() => { setCurrentPage(range); navigate(`/games/${range}`) }} className={`${currentPage === range ? 'text-white bg-brand-purple' : 'text-white'} text-lg py-2 px-4 rounded-lg hover:text-brand-purple duration-100`}>{range}</button>
                            })}
                        </div>
                    </div>
        </div>
    );
}

export default GamesList;