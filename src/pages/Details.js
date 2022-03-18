import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { GameContext } from '../Context';

function Details(props) {
    const [result, setResult] = useState({})

    let { slug } = useParams()
    const fetchDetails = async () => {
        const data = await fetch(`https://api.rawg.io/api/games/${slug}?key=9df1bae5b88947458cc8431730fbfd9f`)
        const res = await data.json()
        setResult(res)
        console.log(result);
    }

    useEffect(() => {
        fetchDetails()

    }, [])
    const { name, description, reddit_description, reddit_name, rating, background_image, website, metacritic, description_raw, playtime, parent_platforms } = result
    const { parsePlatform } = useContext(GameContext)


    return (
        <div className='outlet-layout px-12'>
            <div className='flex flex-col relative items-center justify-center'>
                {/* <p>{result.genres[0].name}</p> */}
                <LazyLoadImage
                    className="rounded-t-xl object-cover self-center"
                    effect="blur"
                    src={background_image} />
                <div className='absolute top-0 right-0  w-full h-full roounded-t-xl'></div>
                <div className='rounded-md bg-black-v3 flex gap-3 absolute bottom-8 z-10 w-5/6 h-1/5 px-12 '>
                    <div className='flex flex-col gap-2 justify-center'>
                        <h3 className='text-white font-bold text-2xl'>{name}</h3>
                        <p className='text-typography-grey max-w-2xl text-sm'>{reddit_description}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <a href={website} className="bg-brand-purple rounded-full px-8 py-4">Visit website</a>
                    </div>
                </div>
            </div>
            <button onClick={() => console.log(result)}>Click</button>
            <div className='bg-black-v3 p-8 m-8 rounded-lg'>
                <div className='flex gap-4 justify-around'>
                    <span className='flex flex-col items-center gap-2'>
                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-t-0 border-l-0 border-brand-purple">
                            {rating}
                        </span>
                        <span>
                            Avg Rating
                        </span>
                    </span>
                    <span className='flex flex-col items-center gap-2'>
                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
                            {metacritic}
                        </span>
                        <span>
                            Metacritic
                        </span>
                    </span>
                    <span className='flex flex-col items-center gap-2'>
                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
                            {playtime} hrs
                        </span>
                        <span>
                            Playtime
                        </span>
                    </span>
                    {parent_platforms && result.parent_platforms.map(platform => <span className='flex flex-col items-center gap-2'>

                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
                            {parsePlatform(platform.platform.name)}
                        </span>
                        <span>
                            {platform.platform.name}
                        </span>
                    </span>)}


                </div>
            </div>
            


            {result && result.platforms && result.platforms.map(platform => <p>{platform.requirements.recommended}</p>)}
            <button onClick={fetchDetails}>Click me</button>




        </div>
    );
}

export default Details;

// name
// metacritic
// released
// website
// rating
// playtime
// platforms
// reddit description
// esrb rating
// description(genres)
// similar games
// requirements