import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOption = ({ pricingData }) => {

    const pricingValues = use(pricingData)
    // console.log(pricingValues);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-7xl mx-auto'>
            {
                pricingValues.map(cardsData =>
                    <DaisyCard key={cardsData.id} cardsData={cardsData}></DaisyCard>
                )
            }

            {/* pricing card without framework
            {
                pricingValues.map(cardsData => <PricingCard
                    key={cardsData.id} cardsData={cardsData}></PricingCard>)
            } */}
        </div>
    );
};

export default PricingOption;