import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card({result, parsePlatform, parseRatingColour}) {
    const { background_image, name, parent_platforms, rating, released, playtime } = result
    return (
        <div className="card bg-black-v3 rounded-xl">
        <div className="overflow-hidden h-2/4">
            <LazyLoadImage
                className="rounded-t-xl h-full w-screen object-cover"
                height={'100%'}
                effect="blur"
                src={background_image} />
            {/* <img src={background_image} /> */}
        </div>
        <div className="flex flex-col gap-5 px-6 py-4 bottom">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg">{name}</h1>
                    <div className={`${parseRatingColour(rating)} border-2 py-1 px-2 rounded-md text-sm`}><p className="font-semibold">{rating}</p></div>
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
                <button className="bg-brand-purple w-full group flex items-center font-medium text-base justify-center gap-2 text-white rounded-md p-4 hover:bg-typography-grey delay-75 duration-300"><p className="text-sm">Add to Library</p><i className="group-hover:animate-pulse"><FaPlus /></i></button>
            </div>
        </div>
    </div>

    );
}

export default Card;