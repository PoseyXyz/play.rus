import React, { useContext } from 'react';
import { GameContext } from '../Context';

function Explore(props) {
    const {test} = useContext(GameContext)
    return (
        <div className="col-span-10 md:col-span-7 rounded-3xl text-typography-white">
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
                            
                        
                            {parent_platforms.map(platform=><div className="text-typography-white">
                                <p>{platform.platform.name}</p>
                                <img/>
                                </div>)}
                        </div>
                    </div>
                        )
                })}
                
            </div>
        </div>
    );
}

export default Explore;