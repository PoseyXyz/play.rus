import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { FaCode, FaDownload, FaHistory, FaHome, FaSignOutAlt } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { CgGames } from 'react-icons/cg'
import { GiCrossedPistols } from 'react-icons/gi'


function Sidebar({ sideBarOpen, setSideBarOpen }) {

    return (
        <div className={`${sideBarOpen ? 'w-full' : 'w-0'} fixed h-screen bg-black z-20 top-0 right-0 duration-700 overflow-hidden`}>
            <button className="text-white text-lg" onClick={() => setSideBarOpen(false)}><i><FaTimesCircle /></i></button>

            <div className="flex flex-col text-white px-6 gap-2">
                <div className="bg-brand-purple rounded-full p-2 px-4 self-center">
                    <p className="text-white text-lg font-bold">A</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between gap-4">
                        <p className="font-light text-typography-grey">Next:</p>
                        <p className="font-semibold">850 XP</p>
                    </div>
                    <div className="">
                        <span className="w-full h-2 rounded-lg bg-typography-grey block"><span className="rounded-lg w-3/5 h-2 block bg-brand-purple"></span></span>

                    </div>
                </div>

                <div className="my-4 flex flex-col gap-6">
                    <div className="menubar-link"><i><FaHome /></i><h1>Explore</h1></div>

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
            </div>

        </div>
    );
}

export default Sidebar;