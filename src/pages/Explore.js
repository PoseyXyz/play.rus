import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GameContext } from '../Context';
import Card from '../components/Card';
import Sort from '../components/Sort';


function Explore(props) {
    const { test, currentPage, setCurrentPage, paginationRange, spinner, parsePlatformIcons, parseRatingColour } = useContext(GameContext)
    let params = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        setCurrentPage(1)

        return ()=>{
            setCurrentPage(1)
        }
    }, [])

    useEffect(()=>{
        if (params.pageNumber){
            setCurrentPage(parseInt(params.pageNumber))
        }else{
            setCurrentPage(1)
        }
    }, [params.pageNumber])

   



    return (
        <div className="outlet-layout">

            {spinner ? <p className="text-white text-7xl">Please wait...</p> :
                <>
                   
                    
                    <Sort/>

                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                        {test && test.results.map(result => {
                           
                            return (
                                    <Card key={result.slug} result={result} parsePlatformIcons={parsePlatformIcons} parseRatingColour={parseRatingColour}/>
                                )
                        })}

                    </div>
                    <div className="w-full flex items-center justify-center my-4 px-4">
                        <div className="flex gap-4">
                            {paginationRange.map(range => {
                                return range === "..." ? <p key={range} className="text-white text-lg self-center">...</p>
                                    :
                                    <button key={range} onClick={() => { setCurrentPage(range); navigate(`/explore/${range}`) }} className={`${currentPage === range ? 'text-white bg-brand-purple' : 'text-white'} text-lg py-2 px-4 rounded-lg hover:text-brand-purple duration-100`}>{range}</button>
                            })}
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Explore;