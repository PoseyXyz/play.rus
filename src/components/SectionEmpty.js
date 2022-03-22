import React from 'react';
import svg from '../images/notfound/emoji.svg'

function SectionEmpty() {
    return (
        <div className='flex justify-center flex-col my-4 items-center lg:text-lg'>
                    <img src={svg} className="h-1/3 w-1/3" alt="Not found in library emoji" />
                    <p>Seems like there are no games here</p>
                </div>
    );
}

export default SectionEmpty;