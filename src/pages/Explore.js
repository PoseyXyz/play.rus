import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GameContext } from '../Context';
import Card from '../components/Card';
import Sort from '../components/Sort';
import Loader from '../components/Loader';


function Explore(props) {
    const { test, currentPage, setCurrentPage, paginationRange, spinner, parsePlatformIcons, parseRatingColour } = useContext(GameContext)
    let params = useParams()
    let navigate = useNavigate()

    //effect lifecycle to set current page/pagination value on page mount/dismount
    useEffect(() => {
        setCurrentPage(1)

        //cleanup function to set pagination value back to 1 when page is unmounted
        return () => {
            setCurrentPage(1)
        }
    }, [])

    //effect lifecycle to set current page/pagination value based on user selected page number (page number is being automatically obtained from route link through react router 6's useParams hook)
    useEffect(() => {
        if (params.pageNumber) {
            setCurrentPage(parseInt(params.pageNumber))
        } else {
            setCurrentPage(1)
        }
    }, [params.pageNumber])

    return (
        <div className="outlet-layout">
            {/* ternary operator displaying spinner component on page load while api data is being fetched and displaying results after results are fully fecthed  */}
            {spinner ?
                <Loader /> :
                <>
                    <Sort />
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {test && test.results.map(result => {

                            return (
                                <Card key={result.slug} result={result} parsePlatformIcons={parsePlatformIcons} parseRatingColour={parseRatingColour} />
                            )
                        })}

                    </div>
                    <div className="w-full flex items-center justify-center my-4 px-4">
                        <div className="flex gap-4">
                            {/* displaying pagination range value and navigating to new route based on user's selected page number */}
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