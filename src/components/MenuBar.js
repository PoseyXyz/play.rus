import React from 'react';
import { FaBook, FaCode, FaDownload, FaFileDownload, FaHistory, FaHome, FaSignOutAlt } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { CgGames } from 'react-icons/cg'
import { GiCrossedPistols } from 'react-icons/gi'

function MenuBar(props) {
    return (
        <aside className="bg-black-v1 hidden md:block col-span-2 text-white sticky top-24 menubar box-border rounded-r-lg">
            <div className="flex flex-col gap-10 py-12">


                <div className="menubar-link active"><i><FaHome /></i><h1>Explore</h1></div>

                <div className="menubar-link text-white"><i><FaHistory /></i><h1>Recents</h1></div>

                <hr className="mx-8 border-black-v3"></hr>

                <div className="flex flex-col gap-8">
                    <div className="menubar-link"><i><ImBooks /></i><h1>My Library</h1></div>

                </div>

                <hr className="mx-8 border-black-v3"></hr>

                <div className="menubar-link"><i><GiCrossedPistols /></i><h1>Genres</h1></div>
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