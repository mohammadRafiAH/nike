import React from 'react';
import {offer} from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container '>
      <div className="flex-1 ">
        <img src={offer} alt="Special Offer" width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold  max-lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
           </span><span className="text-coral-red "> Special</span>Offer
        </h2>
        <p className="mt-4  lg:max-w-lg info-text ">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible
          savings. we are offering unparalleled value that sets us apart
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations . your journey will
          with us is nothing short of expectations
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="shop Now" iconURL={arrowRight}/>
          <Button 
          label="Learn More"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer