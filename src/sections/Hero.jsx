import React, { useState } from 'react'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'

import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'

import { bigShoe1 } from '../assets/images'

import { shoes } from '../constants'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='w-full flex xl:flex-row 
    flex-col 
    min-h-screen max-container'>
<div className='relative xl:w-2/5 flex flex-col justify-center
 items-start w-full max-xl:padding-x pt-20'>
  <p className='text-xl font-montserrat text-red-600'>Fresh and Flavorful Vegetables for Sale</p>
  <h1 className='mt-10 font-palanquin text-[60px] max-sm:text-[72px]  font-bold'>
    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>VeggieTales Harvested Daily
</span><br />

    <span className='text-red-600 inline-block mt-3'>Fresh</span> Produce
  </h1>
  <p className='font-montserrat text-gray-500 text-lg leading-8 mt-6 mb-14 sm:mx-w-sm'>From Our Farm to Your Table: Taste the Natural Goodness! Eat Well, Live Well: 
  Choose Our Fresh Greens!</p>
    <Button label="Show now" iconURL={arrowRight} />

    <div className='flex justify-center items-start flex-wrap w-full 
    mt-20 gap-16'>
  {statistics.map((stat, index)=>(
    <div key={index}>
      <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
      <p className='leading-7 font-montserrat text-gray-500' >{stat.label}</p>
      </div>
  )
  )}
    </div>

</div>

<div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
  <img
  src={bigShoeImg}
  alt='shoe collection'
  width={610}
  height={540} 
  className='object-contain  relative z-8'
  />

  <div className='absolute -bottom-[-1%] flex sm:gap-6 gap-4 sm:left-[5%] max-sm:px-8  z-10'>
    {shoes.map((shoe)=>(
      <div key={shoe.thumbnail}> 
    
       <ShoeCard 
      imgURL={shoe}

      changeBigShoeImage= {(shoe) =>setBigShoeImg(shoe)}
      bigShoeImg={bigShoeImg}
      /> 
      </div> 
    ))}
  </div>
</div>
    </section>
  )
}

export default Hero