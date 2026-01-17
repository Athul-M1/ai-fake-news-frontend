import React from 'react'
import AnimatedSearchInput from '../components/InputBox';
import SearchInput from '../components/InputBox';

const Predict = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log(apiUrl)
  return (
    <div className='w-full h-screen flex items-center justify-center'>
               <div className="absolute top-30 -z-10 left-1/4 size-72 bg-pink-600 blur-[300px]"></div>

    {/* <input type="text" name="" id="" />
     */}   
     <SearchInput/>
    </div>
  )
}

export default Predict
