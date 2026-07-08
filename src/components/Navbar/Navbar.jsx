import React from 'react';
import Links from './Links';
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
    return (
        <nav>

            {/* method: 3 sending data as props */}
            <ul className='flex justify-center gap-5'>
                {
                    navData.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>

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