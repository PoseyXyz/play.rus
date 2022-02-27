import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import FriendsBar from '../components/FriendsBar';
import MenuBar from '../components/MenuBar';
import Nav from '../components/Nav';

function Layout(props) {
    return (
        <main className="bg-pure-black h-screen">
           <header> <Nav/></header>
            <section className="grid grid-cols-10 gap-8 mt-4">
                <MenuBar/>
                <Outlet/>
                <FriendsBar/>
            </section>
        </main>
    );
}

export default Layout;