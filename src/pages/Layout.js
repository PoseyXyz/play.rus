import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import FriendsBar from '../components/FriendsBar';
import MenuBar from '../components/MenuBar';
import Navbar from '../components/Navbar';

function Layout(props) {
    return (
        <main className="bg-pure-black">
           <header> <Navbar/></header>
            <section className="grid grid-cols-10 gap-6 mt-4">
                <MenuBar/>
                <Outlet/>
                <FriendsBar/>
            </section>
        </main>
    );
}

export default Layout;