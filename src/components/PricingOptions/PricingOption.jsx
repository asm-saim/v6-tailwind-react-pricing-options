import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({ pricingData }) => {

    const pricingValues = use(pricingData)
    // console.log(pricingValues);
    return (
        <div className='grid grid-cols-3 mx-7xl mx-auto'>
            {
                pricingValues.map(cardsData => <PricingCard
                    key={cardsData.id} cardsData={cardsData}></PricingCard>)
            }
        </div>
    );
};

export default PricingOption;