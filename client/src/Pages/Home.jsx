import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import StatCard from '../components/StatCard'
import swipe1 from '../assets/img/swipe1.jpg'
import swipe2 from '../assets/img/swipe2.jpg'
import swipe3 from '../assets/img/swipe3.jpg'
import swipe4 from '../assets/img/swipe4.jpg'

const Home = () => {
  const image = [swipe1, swipe2, swipe3, swipe4];

  return (
    <main className="flex flex-col gap-10">
    <section className="flex flex-col gap-6">
      <div className="text-white px-3 flex flex-col items-center">
        <h1 className="text-4xl md:text-8xl font-bold from-green-600 via-green-400 to-blue-400 bg-gradient-to-r bg-clip-text text-transparent">
          VoiceVibes
        </h1>
        <p className="ml-1 md:ml-3 font-semibold text-xl">Welcome where the world connects</p>
      </div>
      <swiper-container slides-per-view="1" space-between="20" pagination="true" navigation="true" autoplay="true" autoplay-delay="1000" loop="true">
        {image.map((item, index) => (
          <swiper-slide key={index} className="">
            <img src={item} alt="" className="h-full w-full brightness-50" />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
    <section className="">
      <div className='container mx-auto text-white px-10 py-3 grid grid-cols-1 gap-5 md:grid-cols-4 justify-center'>
        <StatCard/>
        <StatCard/>
        <StatCard/>
        <StatCard/>
      </div>
    </section>
    <section>
      <div className='container mx-auto flex items-center justify-center mb-1 text-white'>
        <Link to='/auth' className='bg-blue-700 px-10 py-4 rounded-full flex items-center gap-5 hover:bg-blue-500'>Let's begin <FaArrowRight /></Link>
      </div>
    </section>
  </main>
  
  )
}

export default Home