import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import FriendsBar from '../components/FriendsBar';
import MenuBar from '../components/MenuBar';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { GameContext } from '../Context';

function Layout(props) {
    const {sideBarOpen, setSideBarOpen} = useContext(GameContext)
    return (
        <main className="bg-pure-black relative">
           <header> <Navbar/></header>
            <section className="grid grid-cols-10 gap-4 mt-4 top-24">
                <MenuBar/>
                <Outlet/>
                <FriendsBar/>
            </section>
            <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
        </main>
    );
}

export default Layout;