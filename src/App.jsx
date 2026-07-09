import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOptions/PricingOption'
import { Divide } from 'lucide-react'
import Recharts from './components/Recharts/Recharts'
import axios from 'axios'
import MarksChart from './components/MarksCart/MarksChart'


const pricingData = fetch('pricing.json').then(res => res.json())

//using axios library:
const marks = axios("marks.json")

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}

      <Suspense fallback={<div className='flex justify-center'>
        <span className="text-center loading loading-dots loading-xl"></span>
      </div>}>
        <PricingOption pricingData={pricingData}></PricingOption>
      </Suspense>
      <Recharts></Recharts>
      <Suspense fallback={<div className='flex justify-center'>
        <span className="text-center loading loading-dots loading-xl"></span>
      </div>}>
        <MarksChart marks={marks}></MarksChart>
      </Suspense>
    </>
  )
}

export default App
