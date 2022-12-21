import React from 'react'
import arrow from '../../assets/Vector.png'
import { detailCollapse } from "../../data/Apropos"
import { useState } from 'react'



export default function Collapse() {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <div className='collapse'> {detailCollapse.map((collapse) => (
            <section>
                <div className='collapse_title'>
                    <h1 className='collapse_txt'>{collapse.title}</h1>
                    <div className='collapse_fleche'>
                        <img src={arrow} alt="fleche ouverture/fermeture" onClick={() => setIsOpen(false)} />

                    </div>
                </div>
                <div className='collapse_texte'>
                    <p>{collapse.texte}</p>
                </div>
            </section>

        ))}
        </div>
    ) : (
        <div className='collapse'> {detailCollapse.map((collapse) => (
            <section>
                <div className='collapse_title'>
                    <h1 className='collapse_txt'>{collapse.title}</h1>
                    <div className='collapse_fleche'>
                        <img src={arrow} alt="fleche ouverture/fermeture" onClick={() => setIsOpen(true)} />
                    </div>
                </div>
            </section>
        ))}
        </div>
    )
}
