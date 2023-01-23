import React from 'react'
import arrow from '../../assets/Vector.png'
import { useState } from 'react'


export default function Collapse({ titre, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='collapse'>
            <section>
                <div className='collapse_title'>
                    <h1 className='collapse_txt'>{titre}</h1>
                    <div className='collapse_fleche'>
                        <img src={arrow} alt="fleche ouverture/fermeture" onClick={() => setIsOpen(!isOpen)} />

                    </div>
                </div>
                {
                    isOpen && <div className='collapse_texte'>
                        <p>{description}</p>
                    </div>
                }

            </section>
        </div>
    )
}
