import React from 'react'
import {IoSearch} from '../utils/icons.js'
import BannerImg from '../assets/BannerImgOg.jpg'
const Banner = () => {
  return (
    <section>
        <main className='w-full flex flex-col items-center justify-center p-5 sm:p-20'   style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className=' px-5 py-6 bg-black text-center text-white'>
                <p className='text-3xl font-bold'>SHARE YOUR INNOVATIVE IDEAS, SECURE FUNDING, AND SUPPORT. </p>
            </div>
            <div className=' px-4 py-6 text-center'>
                <p className='text-xl font-bold text-white'>" Get the support and resources you need to bring your vision of your Startup. "</p>
            </div>
            <div className=' px-3 py-2   w-full flex items-center justify-center '>
                <div className='flex items-center justify-between  sm:w-1/3 px-2 py-1 border-3 rounded-full bg-white'>
                <input type="text" placeholder='Search Ideas' className='  w-1/2 px-4 text-xl outline-none'/>
                <p className='bg-black rounded-full text-white p-1'>
                    <IoSearch className=' text-2xl  sm:text-4xl '/>
                </p>
                </div>
            </div>

        </main>
    </section>
  )
}

export default Banner