import React from 'react'
import style from './hero.scss'
import Button from '../buttons/Button'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <div className='content__flex-container'>
          <p className='content__title_h2'>TRANSLUCENT</p>
          <p className='content__title_h1'>GREEN</p>
          <p className='content__text'>Elevate You Style Game With This Visual Culture</p>
          <Button text={'DISCOVER'} />
        </div>
        <section className='circuler-svg'>
  <svg fill="white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path  id="circlePath" fill="none" stroke-width="4" stroke="hsl(0 100% 50% / 0.5)" d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        " />
    <text id="text" font-family="monospace" font-size="12" fill="var(--text-1)">
      <textPath id="textPath" href="#circlePath">THE REALM OF INNOVATION & CULTURE</textPath>
    </text>
  </svg>
</section>
        </div>
      <div className='photo'></div>
      <div className='glass'>
        <div className='glass__img'></div>
        <div>
          <p>Ai Prompts</p>
          <ul>
            <li>Green</li>
            <li>Translucent</li>
            <li>Glow</li>
            <li>Fashion</li>
            <li>Techwear</li>
            <li>Futuristic</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero