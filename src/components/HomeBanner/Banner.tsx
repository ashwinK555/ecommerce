import React from 'react'
import shoe1 from '../../assets/shoe1.jpg'
const Banner: React.FC = () => {
    return (
        <div className=' flex flex-col-reverse sm:flex-row m-auto justify-center items-center  max-w-[1080px] shadow p-1'>
            <div className='basis-1/2 flex flex-col space-y-2 '>
                <p className='uppercase font-bold text-5xl'>Days cant start without perfect shoe.</p>
                <p className='text-xl text-gray-500'>Welcome to our ShoeStore – Where Style Meets Comfort!</p>
                <div className='flex justify-center space-x-5 sm:mt-4'>
                     <button className='w-[100px] h-[45px] bg-red-600 rounded font-bold'>Shop Now</button> 
                     <button className='w-[120px] h-[45px]  p-1 bg-green-600  rounded  font-bold'> Learn More  </button>
                     </div>
            </div>

            <div className=' basis-1/2'>
            <img className='object-cover' src={shoe1} alt="" />
            </div>
        </div>

    )
}

export default Banner