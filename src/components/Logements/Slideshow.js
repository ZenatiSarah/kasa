import React, { useState } from 'react'
import '../../style/slideShow.css'
import arrowRight from "../../assets/arrowRight.png"
import arrowLeft from "../../assets/arrowLeft.png"


export default function SlideShow({ slides }) {
    let length = slides.length;

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide < length - 1 ? currentSlide + 1 : 0)
        console.log(currentSlide)
    }
    const previousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
        console.log(currentSlide)
    }

    return (
        <div className='carrousel'>
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
            <div className='icons_arrow'>
                <div className='leftRight'>
                    <img src={arrowLeft} alt="Flèche left" onClick={previousSlide} />
                </div>
                <div className='arrowRight'>
                    <img src={arrowRight} alt="Flèche right" onClick={nextSlide} />
                </div>
            </div>



        </div>

    )
}
