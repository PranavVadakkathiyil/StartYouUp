import React from 'react'
import {MdOutlineRemoveRedEye} from '../utils/icons.js'
const PreviewCard = () => {
  return (
    <section>
        <div className='col-span-1  border-4 border-b-7 border-r-7 rounded-xl max-w-sm p-4'>
            <div className='flex items-center justify-between py-2'>
                <p className=' px-4 py-1 bg-pink-200 rounded-md border-2 border-pink-300'>10 jan 2025 </p>
                <p className='flex items-center gap-2'><MdOutlineRemoveRedEye className='text-xl text-pink-300'/><span>30</span></p>
            </div>
            <div className='flex items-center justify-between py-2'>
                
                    <div>
                        <p className='text-xl'>name</p>
                        <p className='text-2xl'>ideas name</p>
                    </div>
                    <div>
                        <img src="/f" alt="img" className='border w-15 h-15 rounded-full'/>
                    </div>
                
            </div>
            <p className='line-clamp-3 mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, qui architecto minus harum dolorem omnis recusandae illum, ex, sed atque beatae nemo. Voluptatibus at asperiores facere vitae doloribus laborum incidunt explicabo veniam cum! Obcaecati eum itaque maxime magni est sed dolor fugiat tempore accusantium, sunt nemo minima iure ullam a commodi modi alias non perspiciatis praesentium, eos possimus placeat? Odio magni blanditiis, repellendus eum doloribus repellat natus esse ratione molestias deserunt sapiente enim iusto! Officiis repellendus placeat doloremque, adipisci culpa inventore blanditiis, expedita quisquam harum ratione quam iure qui, in maiores corporis minus. Modi, ab explicabo autem obcaecati eius accusamus!</p>
            <div className='w-full border h-[200px] rounded-2xl'>
                <img src="/er" alt="img" className='rounded-2xl'/>
            </div>
            <div className='flex items-center justify-between py-3'>
                <p>main category</p>
                <p className=' px-4 py-1 text-white bg-black rounded-2xl border-2 border-gray-500'>Details </p>

            </div>
        </div>
    </section>
  )
}

export default PreviewCard