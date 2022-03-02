import React, { useContext } from 'react';
import { FaAndroid, FaApple, FaAppStoreIos, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { GameContext } from '../Context';

function parsePlatform(platform){
   
    if (platform === "PC"){
        return <FaWindows/>
    }else if(platform === "PlayStation"){
        return <FaPlaystation/>
    }else if(platform === "Apple Macintosh"){
        return <FaApple/>
    }else if(platform === "Linux"){
        return <FaLinux/>
    }else if(platform === "Android"){
        return <FaAndroid/>
    }else if (platform === "iOS"){
        return <FaAppStoreIos/>
    }else if (platform === "Xbox"){
        return <FaXbox/>
    }
}

function Explore(props) {
    const {test} = useContext(GameContext)
    return (
        <div className="col-span-10 md:col-span-7 bg-black-v2 rounded-3xl p-4 text-typography-white">
            <div className="grid grid-cols-3 gap-4">
                
                    {test.results.map(result=>{
                        const {background_image, name, parent_platforms}=result
                        return (
                    <div className="card">
                        <div className="rounded-t-xl">
                           <img className="rounded-t-xl w-screen" src={result.background_image}/>      
                        </div>
                        <div className="text-center">
                            <h1 className="text-lg">{name}</h1>
                            
                            <div className="flex gap-2 text-lg">
                            {parent_platforms.map(platform=><div className="text-brand-purple">
                                <i>{parsePlatform(platform.platform.name)}</i>
                                </div>)}
                            </div>
                           
                        </div>
                    </div>
                        )
                })}
                
            </div>
        </div>
    );
}

export default Explore;