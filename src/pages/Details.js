import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { GameContext } from '../Context';
import { FaStar } from 'react-icons/fa'
import image1 from '../images/friends/one.png'
import image2 from '../images/friends/two.png'
import image3 from '../images/friends/three.png'
import userImage from '../images/profilehead.jpg'
import Loader from '../components/Loader';

//function to set width of each rectangle in the reactions section based on the percentage value provided by api
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

//function to set the colour for each reaction rectangle in the reactions bar
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

// function parseMetacriticRatingColor(rating) {
//     if (rating < 50) {
//         return 'text-red-500 border-red-500'
//     } else if (rating >= 50 && rating < 70) {
//         return 'text-orange-500 border-orange-500'
//     } else if (rating >= 70) {
//         return 'text-green-500 border-green-500'
//     }
// }


function Details(props) {
    const [result, setResult] = useState({})
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'Uzumaki',
            imageUrl: image2,
            no_of_stars: 5,
            comment: 'Velit pariatur duis reprehenderit pariatur non nulla velit labore deserunt. Est nostrud ut do aliqua. Tempor id laboris laborum ut occaecat fugiat excepteur ea quis consequat ut fugiat. Esse ea proident velit ipsum laboris. Minim nulla dolore consequat tempor. Veniam proident excepteur culpa in tempor nostrud.'
        },
        {
            id: 2,
            name: 'Jonas',
            imageUrl: image1,
            no_of_stars: 5,
            comment: 'Et in ullamco minim consequat culpa officia officia consequat laborum pariatur nisi. Adipisicing est nostrud laboris nisi eu occaecat aliquip. Sint cillum duis deserunt eu eiusmod commodo nostrud pariatur cupidatat occaecat. Incididunt amet cillum quis reprehenderit pariatur nisi. Ea ex esse nulla proident sunt pariatur ad dolore voluptate eiusmod nulla nisi deserunt fugiat. Esse magna est tempor ullamco eu aliqua exercitation ipsum sint consectetur sit Lorem cillum aliqua.'

        },
        {
            id: 3,
            name: 'Jones',
            imageUrl: image3,
            no_of_stars: 5,
            comment: 'Eiusmod aliqua ipsum ut magna duis amet exercitation labore. Cupidatat magna enim do quis proident Lorem. Esse et sunt ut esse incididunt mollit cupidatat. Irure ex fugiat nisi id laborum dolore deserunt aute minim excepteur reprehenderit. Consequat minim magna laboris tempor proident magna dolor et officia non amet cillum eiusmod. Nisi reprehenderit incididunt ea eiusmod minim excepteur nisi aliqua elit ex. Velit id ullamco aliqua tempor excepteur nostrud nulla dolore laborum excepteur non cillum consectetur.'
        }
    ])
    const [loading, setLoading] = useState(false)

    let { slug } = useParams()

    //fetch API call to retrive game data based on slug parameter in route link
    const fetchDetails = async () => {
        setLoading(true)
        const data = await fetch(`https://api.rawg.io/api/games/${slug}?key=9df1bae5b88947458cc8431730fbfd9f`)
        const res = await data.json()
        setResult(res)
        setLoading(false)
    }


    useEffect(() => {
        fetchDetails()
    }, [slug])

    const { name, released, rating, background_image, website, metacritic, description_raw, playtime, parent_platforms, genres, stores, ratings, tags, publishers, developers } = result
    const { parsePlatformIcons, parseStoreIcons, onChange, formData } = useContext(GameContext)

    //function to handle new review post
    const postReview = (reviewPost) => {
        let tempReviews = [...reviews]
        let newReview = {
            id: tempReviews.length + 1,
            name: 'You',
            imageUrl: userImage,
            no_of_stars: parseInt(reviewPost.sliderValue),
            comment: reviewPost.review

        }
        setReviews([...reviews, newReview])
    }


    return (
        <section className='outlet-layout px-12 flex gap-4 flex-col'>

            {
                loading ? <Loader/>:<>
                       <div className='flex flex-col justify-center relative items-center'>
                {/* <p>{result.genres[0].name}</p> */}
                <LazyLoadImage
                    className="rounded-xl object-cover self-center"
                    effect="blur"
                    src={background_image} />
                <div className='absolute top-0 right-0 overlay-lighter w-full h-full roounded-t-xl'></div>
                <div className='absolute items-center justify-center z-10 w-full '>
                    <h1 className='text-white font-bold text-3xl my-3 text-center tracking-wide underline'>{name}</h1>

                </div>
               
            </div>
          


            <section className='lg:px-8 flex gap-4 flex-col'>

                {/* summary */}
                <div className='details_section-div'>
                    <div className='flex flex-wrap items-center text-xs sm:text-base gap-4 justify-around'>
                        <span className='flex flex-col items-center gap-2 text-center'>
                            <span className="bg-black-v2 font-semibold flex items-center justify-center w-16 h-16 rounded-full border-2 border-brand-purple">
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


                {/* //description section */}
                <div className='details_section-div'>
                    <h2 className='text-2xl font-bold'>About</h2>
                    <div className='flex gap-4 my-6 flex-wrap'>

                        {genres && genres.map(genre => (
                            <div key={genre.name} className='rounded-lg text-white text-sm border border-brand-purple py-2.5 px-6'>{genre.name}</div>
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
                                    <div key={platform.platform.name} className='rounded-lg text-white text-sm md:text-base border border-brand-purple  overlay-lighter py-2.5 px-6 flex gap-4 items-center'>
                                        <i className='text-brand-purple'>{parsePlatformIcons(platform.platform.name)}</i>
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
                                    <div key={store.store.slug} className='rounded-lg text-white text-sm md:text-base border border-brand-purple  overlay-lighter py-2.5 px-6 flex gap-4 items-center'>
                                        <i className='text-brand-purple'>{parseStoreIcons(store.store.slug)}</i>
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
                    <div className='bg-red-500 my-6 h-12 w-full flex '>
                        {ratings && ratings.map((rating, index) => <div key={index} style={{ width: parseReactions(rating.title, rating.percent) }} className={`${parseReactionsColor(rating.title)} p-4`}></div>)}

                    </div>
                    <div className='flex flex-col md:flex-row justify-around'>
                        {ratings && ratings.map((rating, index) => <div key={index} className={`p-4 flex flex-col md:items-center gap-2 capitalize`}>

                            <p className='text-sm text-typography-grey'>{rating.count} ({rating.percent}%)</p>
                            <div className='flex items-center gap-2'>
                                <span className={`${parseReactionsColor(rating.title)} rounded-full w-2 h-2`}></span>
                                <p>{rating.title}</p>
                            </div>
                        </div>)}
                    </div>

                </div>

                {/* Additional information */}
                <div className='details_section-div flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>Additional Information</h2>
                    <div>
                        <h4 className='text-typography-grey text-sm'>Release date</h4>
                        <div className='flex gap-4 flex-wrap'>
                            <p>{released}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-typography-grey text-sm'>Publishers</h4>
                        <div className='flex gap-4 flex-wrap'>
                            {publishers && publishers.map(publisher => <p key={publisher.name}>{publisher.name}</p>)}
                        </div>
                    </div>

                    <div>
                        <h4 className='text-typography-grey text-sm'>Developers</h4>
                        <div className='flex gap-2 flex-wrap'>
                            {developers && developers.map(developer => <p key={developer.name}>{developer.name}</p>)}
                        </div>
                    </div>
                    <div>
                        <h4 className='text-typography-grey text-sm'>Website</h4>

                        <a href={website} target="_blank" className='underline hover:text-typography-grey duration-75'>{website}</a>

                    </div>
                    <div>
                        <h4 className='text-typography-grey text-sm'>Tags</h4>
                        <div className='flex gap-2 flex-wrap'>
                            {tags && tags.map(tag => <p key={tag.name} className='underline'>{tag.name},</p>)}
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

                    <div className='flex flex-col gap-6 py-4 rounded-md'>
                        {reviews.map(review => {
                            const { id, name, comment, imageUrl, no_of_stars } = review
                            return (
                                <div className='flex flex-col lg:flex-row gap-4' key={id}>
                                    <img src={imageUrl} className='rounded-full w-12 h-12' />
                                    <div className='flex flex-col'>
                                        <span className='flex gap-2 items-center'><span className='font-medium'>{name}</span><span className='flex text-xs'>{Array(no_of_stars).fill().map(() => <i className='text-brand-purple'><FaStar /></i>)}{Array(5 - no_of_stars).fill().map(() => <i className='text-white'><FaStar /></i>)}</span></span>
                                        <p className='text-typography-grey text-sm leading-6'>{comment}</p>
                                    </div>

                                </div>
                            )
                        })}

                        <div className='rounded-xl post-box p-6 flex flex-col gap-4'>
                            <h4 className='text-white'>Your review</h4>
                            <label htmlFor='sliderValue' className='text-typography-grey text-xs'>No of Stars: {formData.sliderValue}</label>
                            <input type='range' max={5} value={formData.sliderValue} min={1} name="sliderValue" onChange={(e) => onChange(e)} />

                            <input placeholder={`Tell us what you think of ${name}`} className='bg-transparent text-sm lg:text-base outline-none w-full border-b-2 py-3 focus:border-brand-purple delay-100 duration-300' name='review' value={formData.review} onChange={(e) => onChange(e)} />
                            <button className='bg-brand-purple py-3 px-6 rounded-xl' onClick={() => postReview(formData)}>Post</button>

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
                </>
            }

         



        </section>
    );
}

export default Details;

