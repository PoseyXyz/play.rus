import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function MiniCard({ result }) {
    const { name, games_count, image_background } = result
    return (
        <div>
            <h1>{name}</h1>
            <p>{games_count}</p>
            <LazyLoadImage
                className="rounded-t-xl h-full w-screen object-cover"
                height={'100%'}
                effect="blur"
                src={image_background} />
        </div>
    );
}

export default MiniCard;