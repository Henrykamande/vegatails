import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
//console.log(imgURL)

  const handleClick =() =>{
   //console.log(imgURL?.imgURL)

   //console.log({changeBigShoeImage})

    if (bigShoeImg !== imgURL?.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)

    }
  }
  return (
    <div className={`
    
    border-2 rounded-xl
    ${bigShoeImg && bigShoeImg === imgURL?.bigShoe  ? 
      'border-coral-red' 
      : 'border-transparent' } cursor-pointer max-sm:flex-1

    
    `}
    onClick={handleClick}
    ><div className='flex justify-center items-center
     bg-card bg-center bg-cover sn:w-40 sm:h-40 rounded-xl max-sm:p-4'>
      <img src={imgURL?.thumbnail} 
      alt='shoe'
       height={127} 
      width={103} 
      className='object-contain'/>
      </div></div>
  )
}

export default ShoeCard