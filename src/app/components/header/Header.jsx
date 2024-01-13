'use client'
import React, { useState } from 'react'
import style from '../../styles/layout/_header.scss'
import Button from '../buttons/Button'


const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuOpenHandler = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <header className='header'>
            <div className='navigation'>
                <div className='nav-links'>
                    <a className='logo'>T <span>C</span></a>
                    <nav>
                        <a href="">About</a>
                        <a href="">Collection</a>
                        <a href="">Delivery</a>
                        <a href="">Roadmap</a>
                    </nav>
                </div>
                <div className='button-container'>
                    <Button text={'MINT NOW'} />
                </div>
            </div>
            <div className="hamburger-menu">
                <button className="hamburger-button" onClick={menuOpenHandler}> ☰ </button>
                <div className="nav-burger-link"
                style={{ display: isMenuOpen ? 'block' : 'none' }}
                >
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header