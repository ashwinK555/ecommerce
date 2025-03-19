import React from 'react'
import Banner from '../components/HomeBanner/Banner'
import Card from '../components/Card/Card'

const Home: React.FC = () => {
    return (<>
    <div className='p-2 '>
        <Banner />
         </div>

         <div className=' p-2 m-auto max-w-[1080px] flex flex-col space-y-2'>
            <div className='font-bold underline text-red-600'><h4>New Arrival</h4></div>
            <div className='flex flex-col justify-around items-center space-y-5 sm:flex sm:flex-row sm:space-y-0 sm:flex-wrap gap-2 '>
                     
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             
            </div>
         </div>
    </>

    )
}

export default Home