import React, { useContext, useState } from 'react';
import Card from '../components/Card';
import SectionEmpty from '../components/SectionEmpty';
import { GameContext } from '../Context';


function Library() {
    const { librarySections, parseRatingColour, parsePlatform } = useContext(GameContext)
    const [currentKey, setCurrentKey] = useState('uncategorized')

    return (
        <div className="outlet-layout">
            <div className="flex gap-6 py-4 flex-wrap">
                {Object.keys(librarySections).map(key => <button key={key} onClick={() => { setCurrentKey(key) }} className={`${currentKey === key ? 'text-white border-b-2 border-white' : 'border-b-2 border-transparent text-typography-grey'} text-lg py-2 capitalize hover:text-white delay-75 duration-200`}>{key}</button>)}
            </div>
            {
                librarySections[currentKey].length === 0 ? <SectionEmpty/> : <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {librarySections[currentKey].map((result) => <Card key={result.id} result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />)}
                </div>
            }
        </div>
    );
}

export default Library;