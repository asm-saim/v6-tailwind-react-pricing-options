import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOptions/PricingOption'
import { Divide } from 'lucide-react'


const pricingData = fetch('pricing.json').then(res => res.json())

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div className='flex justify-center'>
        <span className="text-center loading loading-dots loading-xl"></span>
      </div>}>
        <PricingOption pricingData={pricingData}></PricingOption>
      </Suspense>

      {/* <DaisyNav></DaisyNav> */}
    </>
  )
}

export default App
