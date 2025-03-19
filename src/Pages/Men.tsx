import React from 'react'
import Card from '../components/Card/Card'

const Men : React.FC = () => {
  return (
    <div className='m-auto mt-2 sm:max-w-[1080px] sm:flex-row sm:flex sm:space-x-2 '>
<div className='border-1 basis-1/5 p-2 rounded h-fit sticky top-16'> 
<h1 className='font-bold'>Filter</h1>
<hr />

<div className='flex flex-col py-2'> 
    <label> Brand</label>
    <select className='outline-none  border-1 border-gray-600 rounded shadow'>
        <option value=""> --Brand--</option>
        <option value="nike"> Nike</option>
        <option value="goldstar"> Gold Star</option>
        <option value="jordan"> Jordan</option>
        <option value="addidas"> Addidas</option>
        <option value="puma"> Puma</option>
    </select>
</div>

<div className='flex flex-col py-2'> 
    <label> Size</label>
    <select className='outline-none  border-1 border-gray-600 rounded shadow'>
        <option value=""> --Size--</option>
        <option value="30"> 30</option>
        <option value="32"> 32</option>
        <option value="40"> 40</option>
        <option value="42"> 42</option>
        <option value="45"> 45</option>
    </select>
</div>

<div className='flex flex-col py-2'> 
    <label> Color</label>
    <select className='outline-none  border-1 border-gray-600 rounded shadow'>
        <option value=""> --Color--</option>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="brown">Brown</option>
        <option value="white"> white</option>
    </select>
</div>

<div className='flex flex-col py-2'> 
    <label> Price</label>
    <select className='outline-none  border-1 border-gray-600 rounded shadow'>
        <option value=""> --Price--</option>
        <option value="3000-5000">3000-5000</option>
        <option value="5000-8000">5000-8000</option>
        <option value="8000-10000">8000-10000</option>
    </select>
</div>


</div>
<div className='border-2 basis-4/5 rounded sm:flex sm:flex-row sm:flex-wrap p-2 gap-3 space-y-4'>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>
 <Card/>


 </div>

    </div>
  )
}

export default Men