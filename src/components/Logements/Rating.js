import React from 'react'
import starpink from "../../assets/etoileRose.png"
import star from "../../assets/etoile.png"

export default function Rating({ rating }) {

    const range = [1, 2, 3, 4, 5];


    return (
        <div className='rating_etoile'>
            {range.map((el) => rating >= el ? <img key={el} src={starpink} alt="J'aime" className='etoile_pink' /> : <img src={star} key={el} alt="Je n'aime pas" className='etoile' />)}
        </div>
    )
}
