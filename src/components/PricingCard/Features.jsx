import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({ feature }) => {
    return (
        <div >            
            <div className='flex gap-2 '>
                <CircleCheckBig></CircleCheckBig><p>{feature}</p>
            </div>
        </div>
    );
};

export default Features;