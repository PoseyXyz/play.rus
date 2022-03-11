import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GameContext } from '../Context';
import Card from '../components/Card';
import Sort from '../components/Sort';


function Explore(props) {
    const { test, currentPage, setCurrentPage, paginationRange, spinner, parsePlatform, parseRatingColour } = useContext(GameContext)
    let params = useParams()
    let navigate = useNavigate()



    return (
        <div className="outlet-layout">

            {spinner ? <p className="text-white text-7xl">Please wait...</p> :
                <>
                    <h1>{params.pageNumber}</h1>
                    <Sort/>

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