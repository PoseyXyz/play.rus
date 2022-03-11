import React, { useContext, useState } from 'react';
import Card from '../components/Card';
import { GameContext } from '../Context';



function Library(props) {
    const { librarySections, recents, parseRatingColour, parsePlatform } = useContext(GameContext)
    const [currentKey, setCurrentKey] = useState('uncategorized')

    const ParseTab=(librarySection)=> {
        const { librarySections, parseRatingColour, parsePlatform } = useContext(GameContext)
        if (librarySection === 'uncategorized') {
             librarySections[librarySection].map(result => {return <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />}) 
             console.log('hello');
        }else if(librarySection==='currently_playing'){
            librarySections[librarySection].map(result => {return <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />}) 
    
        }else if(librarySection === "completed"){
            librarySections[librarySection].map(result => {return <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />}) 
    
        }else if(librarySection==='played'){
            librarySections[librarySection].map(result => {return <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />}) 
    
        }else if(librarySection==='not_played'){
            librarySections[librarySection].map(result => {return <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />}) 
    
        }
    }
    return (
        <div className="outlet-layout">
            <div className="flex gap-6 py-6">
                {Object.keys(librarySections).map(key => <button onClick={()=>{setCurrentKey(key); ParseTab(key)}} className="text-lg capitalize text-typography-grey hover:text-white delay-75 duration-200">{key}</button>)}
            </div>
            <div className='grid grid-cols-3 gap-4'>
            {librarySections[currentKey].map(result => <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />)} 

            </div>
        </div>
    );
}

export default Library;