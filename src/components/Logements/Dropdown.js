import React from 'react'
import arrow from '../../assets/Vector.png'
import { useState } from 'react'
import '../../style/Dropdown.css'

export default function Dropdown({ titre, description }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='dropdown'>
            <section className='section_dropdown'>
                <div className='dropdown_title'>
                    <h1 className='dropdown_txt'>{titre}</h1>
                    <div className='dropdown_fleche'>
                        <img src={arrow} alt="fleche ouverture/fermeture" onClick={() => setIsOpen(!isOpen)} />

                    </div>
                </div>
                {
                    isOpen && <div className='dropdown_texte'>
                        <p>{description}</p>
                    </div>
                }

            </section>
        </div>
    )
}
