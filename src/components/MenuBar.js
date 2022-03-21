import React from 'react';
import { FaCode, FaDownload, FaHistory, FaHome, FaSignOutAlt } from 'react-icons/fa'
import {TiMessages} from 'react-icons/ti'
import { ImBooks } from 'react-icons/im'
import { CgGames } from 'react-icons/cg'
import { GiCrossedPistols } from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom';



function MenuBar(props) {
   
    return (
        <aside className="bg-black-v1 hidden md:block col-span-2 text-white sticky top-24 menubar box-border rounded-r-lg">
            <div className="flex flex-col gap-4 py-12">

                
                <NavLink to='/' className={`menubar-link ${({isActive})=>(isActive?'active':'')}`}><i><FaHome /></i><h1>Explore</h1></NavLink>

                <NavLink to='/recents' className={`menubar-link ${({isActive})=>(isActive ? 'active':'')}`}><i><FaHistory /></i><h1>Recents</h1></NavLink>

                <NavLink to='/chat' className={`menubar-link ${({isActive})=>(isActive ? 'active':'')}`}><i><TiMessages /></i><h1>Chat</h1></NavLink>


                <hr className="mx-8 border-black-v3"></hr>
                <NavLink to='library' className={`menubar-link ${({isActive})=>(isActive?'active':'')}`}><i><ImBooks /></i><h1>My Library</h1></NavLink>
                {/* <Link to='/library' className="flex flex-col gap-8">
                    

                </Link> */}

                <hr className="mx-8 border-black-v3"></hr>

                <NavLink to="/genres" className={`menubar-link ${({isActive})=>(isActive?'active':'')}`}><i><GiCrossedPistols /></i><h1>Genres</h1></NavLink>
                <NavLink to='/developers' className={`menubar-link ${({isActive})=>(isActive?'active':'')}`}><i><FaCode /></i><h1>Developers</h1></NavLink>
                <NavLink to='/platforms' className={`menubar-link ${({isActive})=>(isActive?'active':'')}`}><i><CgGames /></i><h1>Platforms</h1></NavLink>
                <NavLink to='/stores' className={`menubar-link ${({isActive})=>(isActive?'active':'')}`}><i><FaDownload /></i><h1>Stores</h1></NavLink>


                <hr className="mx-8 border-black-v3"></hr>

                <div className="menubar-link"><i><FaSignOutAlt /></i><h1>Logout</h1></div>
            </div>

        </aside>
    );
}

export default MenuBar;