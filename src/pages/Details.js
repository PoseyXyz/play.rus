import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { GameContext } from '../Context';
import {FaStar} from 'react-icons/fa'


function parseReactions(reactionTitle, reactionPercentage) {
    if (reactionTitle === 'recommended') {
        return `${reactionPercentage}%`
    } else if (reactionTitle === 'exceptional') {
        return `${reactionPercentage}%`
    } else if (reactionTitle === 'meh') {
        return `${reactionPercentage}%`
    } else if (reactionTitle === 'skip') {
        return `${reactionPercentage}%`
    }
}

function parseReactionsColor(reactionTitle) {
    if (reactionTitle === 'recommended') {
        return `bg-blue-500`
    } else if (reactionTitle === 'exceptional') {
        return `bg-green-500`
    } else if (reactionTitle === 'meh') {
        return `bg-orange-500`
    } else if (reactionTitle === 'skip') {
        return `bg-red-500`
    }
}


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
    const { name, reddit_description, reddit_name, rating, background_image, website, metacritic, description_raw, playtime, parent_platforms, genres, stores, ratings, tags, publishers, developers } = result
    const { parsePlatform, parseStore } = useContext(GameContext)



    return (
        <section className='outlet-layout px-12 flex gap-4 flex-col'>
            <h1 className='text-white font-bold text-3xl my-3'>{name}</h1>
            <div className='flex flex-col relative items-center justify-center'>
                {/* <p>{result.genres[0].name}</p> */}
                <LazyLoadImage
                    className="rounded-xl object-cover self-center"
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
            {/* <button onClick={() => console.log(result)}>Click</button> */}
            <div className='bg-black-v3 p-8 mx-8 rounded-xl'>
                <div className='flex gap-4 justify-around'>
                    <span className='flex flex-col items-center gap-2 text-center'>
                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-t-0 border-l-0 border-brand-purple">
                            {rating}
                        </span>
                        <span className='max-w-prose'>
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

                    <span className='flex flex-col items-center gap-2'>
                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
                            {parent_platforms && parent_platforms.length}
                        </span>
                        <span>
                            Platforms
                        </span>
                    </span>

                    <span className='flex flex-col items-center gap-2'>
                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
                            {stores && stores.length}
                        </span>
                        <span>
                            Stores
                        </span>
                    </span>

                    <span className='flex flex-col items-center gap-2'>
                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
                            {publishers && publishers.length}
                        </span>
                        <span>
                            Publishers
                        </span>
                    </span>

                    <span className='flex flex-col items-center gap-2'>
                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
                            {developers && developers.length}
                        </span>
                        <span>
                            Developers
                        </span>
                    </span>
                    {/* {parent_platforms && result.parent_platforms.map(platform => <span className='flex flex-col items-center gap-2 text-center'>

                        <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
                            {parsePlatform(platform.platform.name)}
                        </span>
                        <span>
                            {platform.platform.name}
                        </span>
                    </span>)} */}


                </div>
            </div>

            <section className='lg:px-8 flex gap-4 flex-col'>
                {/* //description */}
                <div className='details_section-div'>
                    <h2 className='text-2xl font-bold'>About</h2>
                    <div className='flex gap-4 my-6 flex-wrap'>
                        {genres && genres.map(genre => (
                            <div className='rounded-lg text-white text-sm border border-brand-purple py-2.5 px-6'>{genre.name}</div>
                        ))}
                    </div>
                    <p className='leading-relaxed text-typography-grey tracking-wide'>{description_raw}</p>
                </div>


                <div className='flex flex-col lg:flex-row gap-4'>

                    {/* platforms */}
                    <div className='details_section-div flex-auto'>
                        <h2 className='text-2xl font-bold'>Platforms</h2>
                        <div className='flex gap-4 my-6 flex-wrap'>
                            {parent_platforms && parent_platforms.map(platform => (
                                <>
                                    <div className='rounded-lg text-white text-sm md:text-base border border-brand-purple  overlay-lighter py-2.5 px-6 flex gap-4 items-center'>
                                        <i className='text-brand-purple'>{parsePlatform(platform.platform.name)}</i>
                                        <p>{platform.platform.name}</p>
                                    </div>

                                </>
                            ))}
                        </div>

                    </div>
                    {/* stores */}
                    <div className='details_section-div flex-auto'>
                        <h2 className='text-2xl font-bold'>Stores</h2>
                        <div className='flex gap-4 my-6 flex-wrap'>
                            {stores && stores.map(store => (
                                <>
                                    <div className='rounded-lg text-white text-sm md:text-base border border-brand-purple  overlay-lighter py-2.5 px-6 flex gap-4 items-center'>
                                        <i className='text-brand-purple'>{parseStore(store.store.slug)}</i>
                                        <p>{store.store.name}</p>
                                    </div>

                                </>
                            ))}
                        </div>

                    </div>


                </div>

                {/* reactions */}
                <div className='details_section-div'>
                    <h2 className='text-2xl font-bold'>Reactions</h2>
                    <div className='bg-red-500 h-12 w-full flex '>
                        {ratings && ratings.map(rating => <div style={{ width: parseReactions(rating.title, rating.percent) }} className={`${parseReactionsColor(rating.title)} p-4`}></div>)}

                    </div>
                    <div className='flex flex-col md:flex-row justify-around'>
                        {ratings && ratings.map(rating => <div className={`p-4 flex flex-col md:items-center gap-2 capitalize`}>

                            <p className='text-sm text-typography-grey'>{rating.count} ({rating.percent}%)</p>
                            <div className='flex items-center gap-2'>
                                <span className={`${parseReactionsColor(rating.title)} rounded-full w-2 h-2`}></span>
                                <p>{rating.title}</p>
                            </div>
                        </div>)}
                    </div>

                </div>

                {/* Additional information             */}
                <div className='details_section-div flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>Additional Information</h2>
                    <div>
                        <h4 className='text-typography-grey text-sm'>Publishers</h4>
                        <div className='flex gap-4 flex-wrap'>
                            {publishers && publishers.map(publisher => <p>{publisher.name}</p>)}
                        </div>
                    </div>
                    <div>
                        <h4 className='text-typography-grey text-sm'>Developers</h4>
                        <div className='flex gap-2 flex-wrap'>
                            {developers && developers.map(developer => <p>{developer.name}</p>)}
                        </div>
                    </div>
                    <div>
                        <h4 className='text-typography-grey text-sm'>Website</h4>

                        <a href={website} target="_blank" className='underline hover:text-typography-grey duration-75'>{website}</a>

                    </div>
                    <div>
                        <h4 className='text-typography-grey text-sm'>Tags</h4>
                        <div className='flex gap-2 flex-wrap'>
                            {tags && tags.map(tag => <p className='underline'>{tag.name},</p>)}
                        </div>
                    </div>
                </div>

                {/* reviews */}
                <div className='details_section-div'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <h2 className='text-2xl font-bold'>Reviews</h2>
                            <p className='text-sm text-typography-grey'>45</p>
                        </div>
                        <p className='text-typography-grey'>View All</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3'>
                            <img src={require('../images/friends/two.png')} className='rounded-full w-12 h-12'/>
                            <div className='flex flex-col'>
                                <span className='flex gap-2 items-center'><span className='font-medium'>Uzumaki</span><span className='flex text-brand-purple text-xs'><i><FaStar/></i><i><FaStar/></i><i><FaStar/></i><i><FaStar/></i><i><FaStar/></i></span></span>
                                <p className='text-typography-grey'>Pariatur do proident ipsum dolor qui. Est consectetur reprehenderit eiusmod nisi minim excepteur. Irure Lorem exercitation sint do Lorem commodo nisi velit non reprehenderit voluptate commodo.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className='details_section-div'>
                <h2 className='text-2xl font-bold'>Publishers</h2>
                <div>
                    {publishers && publishers.map(publisher => <p>{publisher.name}</p>)}
                </div>
            </div>

            <div className='details_section-div'>
                <h2 className='text-2xl font-bold'>Developers</h2>
                <div>
                    {developers && developers.map(developer => <p>{developer.name}</p>)}
                </div>
            </div>

            {result && result.platforms && result.platforms.map(platform => <p>{platform.requirements.recommended}</p>)}
            <button onClick={fetchDetails}>Click me</button> */}

            </section>



        </section>
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