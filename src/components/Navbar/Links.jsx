import React from 'react';

const Links = ({ route }) => {
    return (
        <li>
            <a  href={route.path}>{route.name}</a>
        </li>
    );
};

export default Links;