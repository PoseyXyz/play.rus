import React, { useContext } from 'react';
import Card from '../components/Card';
import SectionEmpty from '../components/SectionEmpty';
import { GameContext } from '../Context';

function Recents(props) {
    const { recents, parseRatingColour, parsePlatform } = useContext(GameContext)
  
    return (
        <div className="outlet-layout">
           {recents.length===0?<SectionEmpty/>
           :
           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
           {recents.map(result => {

               return (
                   <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />
               )
           })}
       </div>}
        </div>
    );
}

export default Recents;