import React from 'react';
import { FaCode, FaDownload, FaHistory, FaHome, FaSignOutAlt } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { CgGames } from 'react-icons/cg'
import { GiCrossedPistols } from 'react-icons/gi'
import { Link } from 'react-router-dom';

function MenuBar(props) {
    return (
        <aside className="bg-black-v1 hidden md:block col-span-2 text-white sticky top-24 menubar box-border rounded-r-lg">
            <div className="flex flex-col gap-4 py-12">


                <Link to='/' className="menubar-link active"><i><FaHome /></i><h1>Explore</h1></Link>

                <Link to='/recents' className="menubar-link text-white"><i><FaHistory /></i><h1>Recents</h1></Link>

                <Link to='/search' className="menubar-link text-white"><i><FaHistory /></i><h1>Search</h1></Link>

                <hr className="mx-8 border-black-v3"></hr>

                <Link to='/library' className="flex flex-col gap-8">
                    <div className="menubar-link"><i><ImBooks /></i><h1>My Library</h1></div>

                </Link>

                <hr className="mx-8 border-black-v3"></hr>

                <Link to='genres' className="menubar-link"><i><GiCrossedPistols /></i><h1>Genres</h1></Link>
                <div className="menubar-link"><i><FaCode /></i><h1>Developers</h1></div>
                <div className="menubar-link"><i><CgGames /></i><h1>Platforms</h1></div>
                <div className="menubar-link"><i><FaDownload /></i><h1>Stores</h1></div>

                <hr className="mx-8 border-black-v3"></hr>

                <div className="menubar-link"><i><FaSignOutAlt /></i><h1>Logout</h1></div>
            </div>

        </aside>
    );
}

export default MenuBar;