import React, {useContext} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../Context';

function MiniCard({ result, fetchGamesList, type }) {
    const { id, name, games_count, image_background, slug } = result
    const {currentPage} = useContext(GameContext)
    let navigate = useNavigate()
    const parseSlug=()=>{
        if (type==='platforms'){
            return id
        }else if(type==='stores'){
            return id
        }else{
            return slug
        }
    }
    return (
        <div className='relative mini-card'>
            <div className='absolute w-full h-full z-10 flex flex-col items-center justify-center overlay'>
                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-xl font-sans font-bold'>{name}</h1>
                    <button onClick={()=>{fetchGamesList(type, parseSlug()); navigate(`/games/${parseSlug()}/${currentPage}`)}} className='py-2.5 px-4 btn-overlay self-center rounded-lg hover:bg-white hover:text-black duration-150 delay-75 font-semibold'>View Games</button>
                </div>
                <div className='flex justify-between border-b absolute w-11/12 bottom-4 pb-2 text-sm'>
                <p className='font-semibold'>Game Count:</p>
                <p className='text-gray-400 tracking-wide'>{games_count.toLocaleString()}</p>

                </div>
            </div>
            
                <LazyLoadImage
                    className="rounded-lg h-full object-cover"
                    height={'100%'}
                    width={'100%'}
                    effect="blur"
                    src={image_background} />
            </div>
    
    );
}

export default MiniCard;