import React, {  useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import shoe from '../shoe'
 interface Shoe {
            id: number;
            name: string;
            brand: string;
            price: number;
            size: number;
            image: string;
    }

const Men: React.FC = () => {
    const sizes: number[] = [40, 41, 42, 43];
    const price: number[] = [5000, 8000, 9000, 10000, 11000, 12000, 15000, 20000];
    const brands: string[] = ['Nike', 'Addidas', 'Jordan', 'Puma', 'Reebok', 'Asics', 'Converse'];
    const [filtershoes, setFiltershoes] = useState<Shoe[]>(shoe)
    const [brand , setBrand]= useState<string | null>(null);
    const [maxPrice , setMaxPrice]= useState<number| null>(null);
    const [size, setSize] = useState<number | null>(null);


    useEffect(()=>{ 
    

       const filteredData = shoe.filter((item) => 
    (brand ? item.brand === brand : true) &&
    (maxPrice ? item.price <= maxPrice : true) &&
    (size ? item.size === size : true)
);
     setFiltershoes( filteredData) 

    },[brand,size,maxPrice])
     
   
    return (
        <div className='m-auto mt-2 sm:max-w-[1080px] sm:flex-row sm:flex sm:space-x-2 '>
            <div className='border-1 basis-1/5 p-2 rounded h-fit sticky top-16'>
                <h1 className='font-bold'>Filter</h1>
                <hr />

                <div className='flex flex-col py-2'>
                    <label> Brand</label>
                    <select onChange={(e)=> setBrand(e.target.value)} className='outline-none  border-1 border-gray-600 rounded shadow'>
                        <option className='font-bold text-center' value=""> ----Brand----</option>
                        {brands.map((item) => (
                            <option key={item} className='font-bold text-center' value={item}> {item}</option>

                        ))}

                    </select>
                </div>

                <div className='flex flex-col py-2'>
                    <label> Size</label>
                    <select onChange={(e)=> setSize(Number(e.target.value) )} className='outline-none  border-1 border-gray-600 rounded shadow'>
                        <option className='font-bold text-center' value=""> --Size--</option>
                        {sizes.map((item) => (
                            <option key={item} className='font-bold text-center'  value={item}> {item}</option>
                        ))}

                    </select>
                </div>

                <div className='flex flex-col py-2'>
                    <label> Max. Price</label>
                    <select onChange={(e)=> setMaxPrice(Number(e.target.value)) } className='outline-none  border-1 border-gray-600 rounded shadow'>
                        <option className='font-bold text-center' value=""> --Price--</option>
                        {price.map((item) => (
                            <option className='font-bold text-center' key={item} value={item}>{item}</option>

                        ))}

                    </select>
                </div>


            </div>
            <div className='border-2 basis-4/5 rounded sm:flex sm:flex-row sm:flex-wrap p-2 gap-3 space-y-4'>

                { filtershoes.length > 0 ? filtershoes.map((item)=>(
                        <Card key={item.id} shoe={item}/>
                    ))   : (
                        <p>no results found</p>
                    )
                  
                }



            </div>

        </div>
    )
}

export default Men