import React, { useContext } from 'react';
import Card from '../components/Card';
import SectionEmpty from '../components/SectionEmpty';
import { GameContext } from '../Context';




function Alt(props) {
    const { recents, parseRatingColour, parsePlatform } = useContext(GameContext)
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

export default Alt;