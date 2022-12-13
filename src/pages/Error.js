import React from 'react'
import '../style/error.css'
import logo from '../assets/404.png'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <main className='error'>
            <div className='img_error'>
                <img src={logo} alt='Page introuvable' />
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link to='/' className='link'>Retourner sur la page d’accueil </Link>
            </div>



        </main>

    )
}
