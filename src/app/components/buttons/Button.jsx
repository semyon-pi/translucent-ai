import React from 'react'
import style from '../../styles/components/_button.scss'


const Button = ({text}) => {
  return (
    <div className='btn_container'>
    <div className='btn'>
      {text}
    </div>
    <div className='btn_arrow'>
    <span>&#8594;</span>
    </div>
    </div>
  )
}

export default Button