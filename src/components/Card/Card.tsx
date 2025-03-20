import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

 interface Shoe{
            id: number;
            name: string;
            brand: string;
            price: number;
            size: number;
            image: string;
    }

    interface cardProps {
        shoe: Shoe
    }
const Card: React.FC<cardProps> = ({shoe}) => {

   
    return (
        <div className='max-w-[300px] sm:max-w-[200px]   '>
            <div className='relative h-[150px] border-gray-300 border-2  rounded-xl p-1'>
                <img className='object-cover ' src={shoe.image} alt="" />
                <div className='absolute w-full bottom-0 flex justify-center font-bold' ><h3> {shoe.name}</h3></div>
            </div>
            <div className='m-1 flex justify-around'>
                <p className='font-bold'>Rs {shoe.price}</p> <p className='text-gray-400 font-bold'>{shoe.brand}</p>
            </div>
            <div>
                <button className=' bg-red-500 p-1 rounded-xl text-white font-bold w-full flex items-center justify-around hover:opacity-80 '>Add to Cart <FaCartArrowDown />
                </button>
            </div>

        </div>
    )
}

export default Card