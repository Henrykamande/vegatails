import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
   <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 '>
    <div className=' flex flex-col justify-center
 items-start w-full  pt-20'>
  <h2 className='mt-5 font-palanquin text-4xl capitalize  font-bold '>
We Provide You
    <span className='text-coral-red'> Super</span>
    <span className='text-coral-red'> Quality</span> Vegetables
  </h2>
  <p className='mt-4 lg:max-w-lg info-text'>
  Discover the vibrant world of farm-fresh vegetables at our market. We take pride in offering you the finest selection of locally sourced produce that's bursting with flavor and nutrition. Whether you're a seasoned chef or just looking to add more greens to your diet, our vegetables are the perfect choice.
     </p>
   
   <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and  excellence ensures your satisfaction</p>
    
    <div className='mt-11 s'>
      <Button label="View Details" iconURL={arrowRight} />
      </div>
    
    </div>
    
    </div>

    <div className='flex-1 flex justify-center items-center'>   
      
        <img src={shoe8} 
        alt='shoe8'
        width={570}
        height={522}
        className='object-contain rounded-[50px]'
        />
</div>

   </section>
  )
}

export default SuperQuality