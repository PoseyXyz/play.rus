import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

function Explore(props) {
    const [colors, setColors] = useState([
        {
            name:'bg-brand-purple',
        },
        {
            name:'bg-brand-green'
        }
    ])
    const [selectedColor, setColor] = useState('bg-brand-purple')
    return (
        <div className={`h-screen w-screen ${selectedColor}`}>
            {colors.map(color=>{
                const {name} = color
                return (
                    <button className={`text-2xl ${name}`} onClick={()=>setColor(name)}>{name}</button>
                )
            })}
         EXPLORE PAGE
           
            
        </div>
    );
}

export default Explore;