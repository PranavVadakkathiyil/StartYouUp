import React from 'react'
import PreviewCard from '../components/PreviewCard'

const Home = () => {
  return (
    <section className='sm:px-28 py-8'>

    <div className='grid sm:grid-cols-3 gap-5 p-1 sm:p-0'>
    <PreviewCard/>
    <PreviewCard/>
    <PreviewCard/>
    <PreviewCard/>
    <PreviewCard/>
    <PreviewCard/>
    <PreviewCard/>
    
    </div>
    </section>
  )
}

export default Home