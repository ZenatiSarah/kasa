import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <header>
            <img src={logo} alt="Logo kasa " />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/apropos" >A propos</Link>
            </nav>
        </header>
    )
}
