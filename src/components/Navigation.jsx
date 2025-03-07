import React from 'react'
import {IoMdAdd,IoChatbubblesOutline,SiGooglemeet,FaListUl} from '../utils/icons.js'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <section className='sm:w-[5%] w-[15%] border h-[90vh]'>
        <div className='grid grid-cols-1  items-center'>
            <Link to='/dashboard/addinfo' className='col-span-1 h-12 sm:h-18 flex items-center justify-center'>
                <p><IoMdAdd className='sm:text-3xl text-xl  '/></p>
             </Link>
            <Link to='/dashboard/listinfo' className='col-span-1 h-12 sm:h-18 flex items-center justify-center'>
                <p><FaListUl className='sm:text-3xl text-xl  '/></p>
            </Link>
            <Link to='/dashboard/chat' className='col-span-1 h-12 sm:h-18 flex items-center justify-center'>
                <p><IoChatbubblesOutline className='sm:text-3xl text-xl  '/></p>
            </Link>
            <Link to='/dashboard/meet' className='col-span-1 h-12 sm:h-18 flex items-center justify-center'>
                <p><SiGooglemeet className='sm:text-3xl text-xl  '/></p>
            </Link>
            
        </div>
    </section>
  )
}

export default Navigation