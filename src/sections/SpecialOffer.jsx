import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center 
    max-xl:flex-col-reverse gap-10 max-container'>

<div className='flex-1'>
  <img  src={offer}
  width={773}
  height={687}
  className='object-contain w-full'
  />
</div>


<div className='flex flex-1 '>
    <div className=' flex flex-col justify-center
 items-start w-full  '>
  <h2 className='mt-5 font-palanquin text-4xl capitalize  font-bold '>
    <span className='text-coral-red'> Special</span> Offer
  </h2>
  <p className='mt-4 lg:max-w-lg info-text'>
  Don't miss out on our incredible Vegetable Sale Offer! Get ready to fill your basket with the freshest and healthiest 
  vegetables at unbeatable prices. We're bringing you a bountiful 
  selection of farm-fresh produce that's not only delicious but also 
  packed with essential nutrients.
   Whether you're looking for vibrant bell peppers, crisp cucumbers, or the juiciest tomatoes, we've got it all. From leafy greens to root
    vegetables, our range caters to every culinary preference and dietary need. 
    
     </p>
   <p className='mt-6 lg:max-w-lg info-text'> Whether you're looking for vibrant bell peppers, crisp cucumbers, or the juiciest tomatoes, we've got it all. From leafy greens to root
    vegetables, our range caters to every culinary preference and dietary need. </p>
    
    <div className='mt-11 flex flex-wrap gap-4'>
      <Button label="Shop Now" iconURL={arrowRight} />
      <Button label="Learn More" backgroundColor="bg-white"
      borderColor ="border-slate-gray"
      textColor ="text-slate-gray"
      iconURL={arrowRight} />
      </div>
    
    </div>
</div>
    </section>
  )
}

export default SpecialOffer