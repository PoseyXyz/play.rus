import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Card from '../components/Card';
import { GameContext } from '../Context';

function GamesList(props) {
    const {gamesList, parsePlatform, parseRatingColour} = useContext(GameContext)
    return (
        <div className='outlet-layout'>
            {gamesList&&gamesList.map(result=><Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour}/>)}
        </div>
    );
}

export default GamesList;