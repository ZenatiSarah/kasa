import React from 'react'
import "../../style/liste.css"
import products from '../../data/Annonces'
import { Link } from 'react-router-dom'

export default function List_location() {

    return (
        <div className='liste_location'>
            {products.map((annonce) => (
                <article className='location' key={annonce.id}>
                    <Link to={annonce.id}><img src={annonce.cover} alt="Images des annonces" /></Link>

                    <div className='annonce_title'><h2>{annonce.title}</h2></div>


                </article>
            ))}

        </div>

    )
}
