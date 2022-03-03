import React, { useContext } from 'react';
import { FaAndroid, FaApple, FaAppStoreIos, FaCalendar, FaClock, FaLinux, FaPlaystation, FaPlus, FaWindows, FaXbox } from 'react-icons/fa';
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

function Explore(props) {
    const { test } = useContext(GameContext)
    return (
        <div className="col-span-10 md:col-span-7 bg-black-v2 rounded-3xl p-4 text-typography-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {test.results.map(result => {
                    const { background_image, name, parent_platforms, rating, released, playtime } = result
                    return (
                        <div className="card bg-black-v3 rounded-xl">
                            <div className="">
                                <img className="rounded-t-xl w-screen" src={background_image} />
                            </div>
                            <div className="flex flex-col gap-5 px-6 py-4 bottom">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-lg tracking-wide">{name}</h1>
                                        <div className="border-green-500 border-2 py-1 px-2 rounded-md text-green-500 text-sm"><p className="font-semibold">{rating}</p></div>
                                    </div>
                                    

                                    <div className="flex gap-3 text-lg">
                                        {parent_platforms.map(platform => <div className="text-typography-white">
                                            <i>{parsePlatform(platform.platform.name)}</i>
                                        </div>)}
                                    </div>
                                </div>

                                <div className="flex justify-between border-y border-typography-grey py-4">
                                    <div className="">
                                        <div className="flex gap-2 items-center text-sm"><i className="text-brand-purple text-lg"><FaCalendar /></i>
                                            <div className="flex flex-col">
                                                <p className="text-typography-grey">Release date:</p>
                                                <p className="text-white">{released}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex gap-2 items-center text-sm"><i className="text-brand-purple text-lg"><FaClock /></i>
                                            <div className="flex flex-col">
                                                <p className="text-typography-grey">Playtime:</p>
                                                <p className="text-white">{playtime} hrs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <button className="bg-brand-purple w-full flex items-center font-semibold text-xl justify-center gap-2 text-white rounded-md p-3"><p>Add</p> <i><FaPlus/></i></button>
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