import React, { useContext, useState } from 'react';
import Card from '../components/Card';
import SectionEmpty from '../components/SectionEmpty';
import { GameContext } from '../Context';
import completedIcon from '../images/miniIcons/completed.png'
import currently_playingIcon from '../images/miniIcons/currently_playing.png'
import not_playedIcon from '../images/miniIcons/not_played.png'
import playedIcon from '../images/miniIcons/played.png'
import uncategorizedIcon from '../images/miniIcons/uncategorized.png'

function Library() {
    const { librarySections, parseRatingColour, parsePlatformIcons } = useContext(GameContext)
    const [currentKey, setCurrentKey] = useState('uncategorized')
    const popupIcons = [uncategorizedIcon, currently_playingIcon, completedIcon, playedIcon, not_playedIcon]

    return (
        <div className="outlet-layout">
            <div className="flex gap-6 py-4 flex-wrap">
                {Object.keys(librarySections).map((key,index) => <button key={key} onClick={() => { setCurrentKey(key) }} className={`${currentKey === key ? 'text-white border-b-2 border-white' : 'border-b-2 border-transparent text-typography-grey'} flex gap-2 items-center text-lg py-2 capitalize hover:text-white delay-75 duration-200`}><img src={popupIcons[index]} alt='popup_icon' className='w-6 h-6'/>{key.split("_").join(" ")}</button>)}
            </div>
            {
                librarySections[currentKey].length === 0 ? <SectionEmpty/> : <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {librarySections[currentKey].map((result) => <Card key={result.id} result={result} parsePlatformIcons={parsePlatformIcons} parseRatingColour={parseRatingColour} />)}
                </div>
            }
        </div>
    );
}

export default Library;