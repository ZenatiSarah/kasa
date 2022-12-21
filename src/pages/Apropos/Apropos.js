import React from 'react'
import montagne from '../../assets/montagne.png'
import '../../style/collapse.css'
import Collapse from '../../components/Apropos/Collapse'

export default function Apropos() {
    return (
        <div className='apropos'>
            <div className='apropos_img'>
                <img src={montagne} alt='montagne' />
            </div>

            <Collapse />
        </div>
    )
}
