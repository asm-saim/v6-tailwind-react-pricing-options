import React from 'react';
import Features from './Features';

const PricingCard = ({ cardsData }) => {

    const { plan, price, duration, description, features } = cardsData;

    return (
        <div className='border border-cyan-500 p-5 m-5 rounded-xl'>
            <h1>{plan}</h1>
            <h3>{price}</h3>
            <h3>{duration}</h3>
            <p>{description}</p>
            <h1 className='mt-2'>Features:</h1>
            {
                features.map((feature, index) => <Features key={index} feature={feature}></Features>)
            }
        </div>
    );
};

export default PricingCard;

//     "id": 1,
//     "plan": "Basic",
//     "price": 19.99,
//     "duration": "Monthly",
//     "description": "Perfect for beginners starting their fitness journey.",
//     "features": [
//         "Gym Access",
//         "Locker Facility",
//         "Free Wi-Fi",
//         "1 Fitness Assessment"
//     ]
// },