import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {
    const [result, setResult] = useState()
    let {slug} = useParams()
    const fetchDetails=async()=>{
        const data = await fetch(`https://api.rawg.io/api/games/${slug}?key=9df1bae5b88947458cc8431730fbfd9f`)
        const res = await data.json()
        setResult(res)
    }
   useEffect(()=>{
    fetchDetails()
   }, [])
    return (
        <div className='outlet-layout'>
            <p>{result && result.name }</p>
            <button onClick={fetchDetails}>Click me</button>
        </div>
    );
}

export default Details;