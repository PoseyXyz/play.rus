import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import { GameContext } from '../Context';

function GamesList(props) {
    const { gamesList, parsePlatformIcons, parseRatingColour, currentPage, setCurrentPage, paginationRange, spinner, fetchGamesList, pageType } = useContext(GameContext)
    let navigate = useNavigate()
    let params = useParams()
    let { category, pageNumber } = params
    

    useEffect(() => {
        return () => { setCurrentPage(1) }
    }, [])
    useEffect(() => {
        fetchGamesList(pageType, category)
    }, [currentPage])
    useEffect(()=>{
        if (pageNumber){
            setCurrentPage(parseInt(pageNumber))
        }else{
            setCurrentPage(1)
        }
    }, [params])
    return (
        <div className='outlet-layout'>
            {
                spinner ? <p>Please wait</p>
                    :
                    <>

                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                            {gamesList && gamesList.map(result => <Card key={result.slug} result={result} parsePlatformIcons={parsePlatformIcons} parseRatingColour={parseRatingColour} />)}
                        </div>
                        <div className="w-full flex items-center justify-center my-4 px-4">
                            <div className="flex gap-4">
                                {paginationRange.map(range => {
                                    return range === "..." ? <p key={range} className="text-white text-lg self-center">...</p>
                                        :
                                        <button key={range} onClick={() => { setCurrentPage(range); navigate(`/games/${category}/${range}`) }} className={`${currentPage === range ? 'text-white bg-brand-purple' : 'text-white'} text-lg py-2 px-4 rounded-lg hover:text-brand-purple duration-100`}>{range}</button>
                                })}
                            </div>
                        </div></>
            }
        </div>
    );
}

export default GamesList;