import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { FaCode, FaDownload, FaHistory, FaHome, FaSignOutAlt } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { CgGames } from 'react-icons/cg'
import { GiCrossedPistols } from 'react-icons/gi'


function Sidebar({ sideBarOpen, setSideBarOpen }) {

    return (
        <div className={`${sideBarOpen ? 'w-full' : 'w-0'} fixed overflow-y-scroll bg-black h-screen z-20 top-0 right-0 duration-700 py-3 overflow-x-hidden flex flex-col`}>

            <button className="text-white right-4 text-4xl top-4 self-end mr-4" onClick={() => setSideBarOpen(false)}><i><FaTimesCircle /></i></button>

            <div className="flex flex-col text-white px-6 gap-2 mt-4">
                <div className="bg-brand-purple rounded-full p-3 px-5 self-center">
                    <p className="text-white text-xl font-bold">A</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between gap-4">
                        <p className="font-light text-typography-grey">Next:</p>
                        <p className="font-semibold">850 XP</p>
                    </div>
                    <div className="">
                        <span className="w-full h-3 rounded-lg bg-typography-grey block"><span className="rounded-lg w-3/5 h-3 block bg-brand-purple"></span></span>
                    </div>
                </div>

                <div className="my-8 flex flex-col gap-8">
                    <div className="sidebar-link"><i><FaHome /></i><h1>Explore</h1></div>

                    <div className="sidebar-link text-white"><i><FaHistory /></i><h1>Recents</h1></div>


                    <div className="flex flex-col gap-8">
                        <div className="sidebar-link"><i><ImBooks /></i><h1>My Library</h1></div>

                    </div>



                    <div className="sidebar-link"><i><GiCrossedPistols /></i><h1>Genres</h1></div>
                    <div className="sidebar-link"><i><FaCode /></i><h1>Developers</h1></div>
                    <div className="sidebar-link"><i><CgGames /></i><h1>Platforms</h1></div>
                    <div className="sidebar-link"><i><FaDownload /></i><h1>Stores</h1></div>



                    <div className="sidebar-link"><i><FaSignOutAlt /></i><h1>Logout</h1></div>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;