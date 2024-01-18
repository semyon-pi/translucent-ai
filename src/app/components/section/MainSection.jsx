import React from 'react'
import style from './_mainSection.scss'
import Button from '../buttons/Button'

const MainSection = ({dir, img}) => {
    return (
        <div dir={dir} className='hero_main'>
            <div className='photo_main'><img src={img}alt="" /></div>
            <div className='content_container'>
                <div className='content_container__horizontal_text'>
                    <p>POSSIBILITTES</p>
                    <p>LIMITLESS</p>
                    <p>EMPOWER</p>
                </div>
                <div dir={dir} className='content_container__flex_container'>
                    <h3 className=''>Elevate Your Style With this Visual Culture </h3>
                    <p className=''>Our mission is to empower individuals to transcore traditional fashion boundaries and embrace the limitless possibilities offered by virutal culture&quot;. Powered by cutting-edge AI technology and patent pending PHYGITIALIZATION&quot;, developed by fashion icons&quot;, we redefine the fashion landscape by seamlessly merging the physical and digital realms.</p>
                    <Button text={'DISCOVER'} />
                </div>
            </div>
        </div>
    )
}

export default MainSection