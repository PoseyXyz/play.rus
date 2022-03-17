import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Details(props) {
    const [result, setResult] = useState({})
    let {slug} = useParams()
    const fetchDetails=async()=>{
        const data = await fetch(`https://api.rawg.io/api/games/${slug}?key=9df1bae5b88947458cc8431730fbfd9f`)
        const res = await data.json()
        setResult(res)
    }
   useEffect(()=>{
    fetchDetails()
   }, [])
   const {name, background_image_additional} = result 

   
    return (
        <div className='outlet-layout'>
          <LazyLoadImage
                    className="rounded-t-xl h-full w-screen object-cover"
                    height={'100%'}
                    effect="blur"
                    src={background_image_additional} />
            <img src={result&&result.background_image}/>
            <img src={result&&result.background_image_additional}/>
            <img src={result&&result.reddit_logo}/>
            <p>{name}</p>
           
            {result && result.platforms && result.platforms.map(platform=><p>{platform.requirements.recommended}</p>)}
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