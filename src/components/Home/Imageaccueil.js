import React from 'react'
import ImageHome from "../../assets/img-home.png"
import background from "../../assets/Background.png"
import "../../style/ImageAccueil.css"

export default function ImageAccueil() {
    return (
        <div className='home-images'>

            <h1>Chez vous, <span>partout et ailleurs</span></h1>
            <img src={ImageHome} alt="accueil Kasa" />
            <img src={background} alt="background Kasa" />
        </div>

    )
}
