import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';

const navData = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Projects",
        path: "/projects",
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {

    const links = navData.map(route => <Links key={route.id} route={route}></Links>)


    //set state for toggling:
    const [open, setOpen] = useState(true)

    return (
        <nav className='flex justify-between mx-10'>

            <span onClick={() => setOpen(!open)} className='flex  mx-3 md:mx-10'>
                {open ?
                    <Menu className='md:hidden'></Menu> :
                    <X className='md:hidden'></X>}

                <ul className='md:hidden'>
                    {links}
                </ul>
                <h3>My Name</h3>
            </span>

            <ul className='hidden md:flex justify-center gap-5'>
                {
                    links
                }
            </ul>

            <button className='btn'>Sign In</button>

            {/* method:2 using array of object  */}
            {/* <ul className='flex justify-center gap-10 '>
                {
                    navData.map(data => <li><a href={data.path}>{data.name}</a></li>)
                }
            </ul> */}

            {/* method:1 
             <ul className='flex gap-10 items-center justify-center border border-amber-300'>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Blog">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;