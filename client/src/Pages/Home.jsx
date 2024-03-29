import React from 'react'
import swipe1 from '../assets/img/swipe1.jpg'
import swipe2 from '../assets/img/swipe2.jpg'
import swipe3 from '../assets/img/swipe3.jpg'
import swipe4 from '../assets/img/swipe4.jpg'

const Home = () => {
  const image = [swipe1, swipe2, swipe3, swipe4];

  return (
    <>
      <section className='relative'>
        <div className='text-white absolute px-3 left-10 top-48'>
          <h1 className='text-4xl md:text-8xl font-bold from-green-600 via-green-400 to-blue-400 bg-gradient-to-r bg-clip-text text-transparent'>VoiceVibes</h1>
          <p className='ml-1 md:ml-3 font-semibold text-xl'>Welcome where the world connects</p>
        </div>
        <swiper-container slides-per-view="1" space-between="20" pagination="true" navigation="true" autoplay="true" autoplay-delay="1000" loop="true">
          {
            image.map((item, index) => (
              <swiper-slide key={index} className="">
                <img src={item} alt="" className='h-full w-full brightness-50' />
              </swiper-slide>
            ))
          }
        </swiper-container>
      </section>
      <section>
        
      </section>
    </>
  )
}

export default Home