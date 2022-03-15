import React, { useContext } from 'react';
import Card from '../components/Card';
import { GameContext } from '../Context';

function GamesList(props) {
    const { gamesList, parsePlatform, parseRatingColour } = useContext(GameContext)
    return (
        <div className='outlet-layout'>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                {gamesList && gamesList.map(result => <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour} />)}

            </div>
        </div>
    );
}

export default GamesList;