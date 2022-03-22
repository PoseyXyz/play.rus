import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function NotFound(props) {
    return (
        <div className="h-screen w-screen relative">
            <img src={require('../images/notfound/404.png')} className="absolute z-10 h-screen w-screen object-cover" alt="404_image"/>
            <div className="relative z-20 overlay w-screen h-screen flex flex-col justify-center items-center gap-6 text-white">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-xl font-medium text-center max-w-xs md:max-w-xl">Sorry, can't seem to find the page you were looking for</p>
                <Link to='/'>
                <button className="bg-white text-black-v1 px-8 py-3 text-xl font-semibold hover:bg-typography-grey delay-75 duration-300 hover:text-white">Main Page</button></Link>
            </div>
        </div>
    );
}

export default NotFound;