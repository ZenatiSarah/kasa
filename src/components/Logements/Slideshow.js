import React, { useState } from 'react'
import '../../style/slideShow.css'
//import arrowRight from "../../assets/arrowRight.png"
//import arrowLeft from "../../assets/arrowLeft.png"


export default function SlideShow({ slides }) {
    let length = slides.length;

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length ? currentSlide + 1 : 0)
    }

    return (
        <section className='Carrousel'>
            {slides.map((picture, index) => {
                return (
                    <div key={index} className="slide">
                        {index === currentSlide && (
                            <div className='slide_picture' key={index}>
                                <img src={picture} alt="pictures carrousel" />
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}
