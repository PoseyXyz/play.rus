import React, { useContext, useEffect, useState } from 'react';
import { FaAndroid, FaApple, FaAppStoreIos, FaCalendar, FaCheck, FaClock, FaLinux, FaPlaystation, FaPlus, FaPlusSquare, FaWindows, FaXbox } from 'react-icons/fa';

import Card from '../components/Card';
import { GameContext } from '../Context';

function parsePlatform(platform) {

    if (platform === "PC") {
        return <FaWindows />
    } else if (platform === "PlayStation") {
        return <FaPlaystation />
    } else if (platform === "Apple Macintosh") {
        return <FaApple />
    } else if (platform === "Linux") {
        return <FaLinux />
    } else if (platform === "Android") {
        return <FaAndroid />
    } else if (platform === "iOS") {
        return <FaAppStoreIos />
    } else if (platform === "Xbox") {
        return <FaXbox />
    }
}

function parseRatingColour(color) {
    if (color < 3) {
        return 'border-red-500 text-red-500'
    } else if (color >= 4) {
        return 'border-green-500 text-green-500'
    } else {
        return 'border-yellow-500 text-yellow-500'
    }
}


function Alt(props) {
    const {recents} = useContext(GameContext)
    // const [recents, setRecents] = useState([1,2,3,4,5,6,7,8,9])
    // const parseRecents=(num)=>{
    //     if(recents.length<10){
    //         let tempArray = [...recents]
    //         const insert = (arr, index, newItem)=>[
    //             ...arr.slice(0, index),
    //             newItem,
    //             ...arr.slice(index)
    //         ]
    //         tempArray = insert(tempArray, 0, num)
    //        setRecents(tempArray)
    //        console.log(recents);
    //     }else if(recents.length===10){
    //         let tempArray = [...recents]
    //         tempArray = tempArray.filter((number, i)=>number!==tempArray[tempArray.length-1])
    //         const insert = (arr, index, newItem)=>[
    //             ...arr.slice(0, index),
    //             newItem,
    //             ...arr.slice(index)
    //         ]
    //         tempArray = insert(tempArray, 0, num)
    //        setRecents(tempArray)
    //        console.log(recents);
    //     }
    // }

    
    
  
    return (
        <div className="col-span-7 bg-black-v2 rounded-3xl mt-24 text-white">
             {recents.results.map(result => {
                           
                           return (
                                   <Card result={result} parsePlatform={parsePlatform} parseRatingColour={parseRatingColour}/>
                               )
                       })}
        </div>
    );
}

export default Alt;