import React from 'react';
import Features from './Features';

const PricingCard = ({ cardsData }) => {

    const { plan, price, duration, description, features } = cardsData;

    return (
        <div className=' flex flex-col border border-cyan-500 p-5 m-5 rounded-xl'>
            <h1 className='text-4xl font-bold'>{plan}</h1>
            <h3 className='text-2xl font-bold'>{price}</h3>
            <h3>Duration: {duration}</h3>
            <p className='text-sm mt-1 font-style: italic'>{description}</p>
            <h1 className='mt-2'>Features:</h1>
            <div className='flex-1 bg-cyan-900 my-2 p-2 rounded-xl'>
                {
                    features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                }
            </div>

            <button className="btn w-full bg-cyan-500 text-black">Subscribe</button>
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