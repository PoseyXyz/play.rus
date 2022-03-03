import React from 'react';
import {FaBook, FaCode, FaDownload, FaFileDownload, FaHistory, FaHome, FaSignOutAlt} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {CgGames} from 'react-icons/cg'
import {GiCrossedPistols} from  'react-icons/gi'

function MenuBar(props) {
    return (
        <aside className="bg-black-v1 hidden md:block col-span-2 text-white rounded-r-lg">
            <div className="flex flex-col gap-8 py-8">
                
            <div className="menubar-link active"><i><FaHome/></i><h1>Explore</h1></div>

<div className="menubar-link text-white"><i><FaHistory/></i><h1>Recents</h1></div>

<hr className="mx-8 border-black-v3"></hr>

<div className="flex flex-col gap-8">
    <div className="menubar-link"><i><ImBooks/></i><h1>My Library</h1></div>
    <div className="pl-10 lg:pl-16 text-typography-grey text-base lg:text-lg hover:text-typography-white cursor-pointer delay-75 duration-150"><i></i><h3>Collection</h3></div>
    <div className="pl-10 lg:pl-16 text-typography-grey text-base lg:text-lg hover:text-typography-white cursor-pointer delay-75 duration-150"><i></i><h3>Bookmarks</h3></div>
    <div className="pl-10 lg:pl-16 text-typography-grey text-base lg:text-lg hover:text-typography-white cursor-pointer delay-75 duration-150"><i></i><h3>Top rated</h3></div>
</div>

<hr className="mx-8 border-black-v3"></hr>

<div className="menubar-link"><i><GiCrossedPistols/></i><h1>Genres</h1></div>
<div className="menubar-link"><i><FaCode/></i><h1>Developers</h1></div>
<div className="menubar-link"><i><CgGames/></i><h1>Platforms</h1></div>
<div className="menubar-link"><i><FaDownload/></i><h1>Stores</h1></div>

<hr className="mx-8 border-black-v3"></hr>

<div className="menubar-link"><i><FaSignOutAlt/></i><h1>Logout</h1></div>
</div>

             </aside>
    );
}

export default MenuBar;