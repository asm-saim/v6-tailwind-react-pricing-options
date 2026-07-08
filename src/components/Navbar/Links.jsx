import React from 'react';

const Links = ({ route }) => {
    return (
        <li className='px-4 hover:bg-amber-500 '>
            <a  href={route.path}>{route.name}</a>
        </li>
    );
};

export default Links;