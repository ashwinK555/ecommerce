import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

import shoe2 from '../../assets/shoe1.jpg'

const Card : React.FC = () => {
  return (
    <div className='max-w-[300px] sm:max-w-[200px]   '>
        <div className='relative border-gray-300 border-2  rounded-xl p-1'>
            <img className='object-cover ' src={shoe2} alt="" />
            <div className='absolute w-full bottom-0 flex justify-center font-bold' ><h3>Jordan Air 3</h3></div>
        </div>
        <div className='m-1'>
             <p className='font-bold'>Rs 5000</p>
        </div>
        <div>
            <button className=' bg-red-600 p-1 rounded-xl text-white font-bold w-full flex items-center justify-around '>Add to Cart <FaCartArrowDown />
            </button>
        </div>

    </div>
  )
}

export default Card