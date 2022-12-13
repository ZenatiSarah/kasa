import React from 'react'
import logo from '../../assets/logo_white.png'
import "../../style/footer.css"

export default function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className='footer_img'>
                    <div className='image'>
                        <img src={logo} alt='logo kasa white' />
                    </div>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>

            </div>

        </footer>
    )
}
