import React from 'react';

const DaisyCard = ({ cardsData }) => {
    const { plan, price, duration, features, popular } = cardsData;
    return (
        <div className=" flex flex-col card w-96 mx-auto shadow-sm bg-cyan-900">
            <div className="card-body">
                {
                    popular && <span className="badge badge-xs badge-warning">Most Popular</span>
                }

                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{plan}</h2>
                    <span className="text-xl">{price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                    {
                        features.map(feature => <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{feature}</span>
                        </li>)
                    }

                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block bg-cyan-600 border-none shadow-none">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default DaisyCard;