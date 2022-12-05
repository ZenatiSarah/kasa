import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import "../../style/Navbar.css"

export default function Navbar() {
    return (
        <header>
            <img src={logo} alt="Logo kasa " className='header-img' />
            <nav className='header-nav'>
                <Link to="/">Accueil</Link>
                <Link to="/apropos" >A propos</Link>
            </nav>
        </header>
    )
}
