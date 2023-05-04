import React, { useState } from 'react'
import '../../style/slideShow.css'
import arrowRight from "../../assets/arrowRight.png"
import arrowLeft from "../../assets/arrowLeft.png"


export default function SlideShow({ slides }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    let nombreSlides = slides.length;

    //Prend la valeur qui est égal à la longueur du tableau. == défini sur 0
    //rajoute 1 pour passer au suivant
    const nextSlide = () => {
        setCurrentSlide(currentSlide === nombreSlides ? 0 : currentSlide + 1)
        console.log(currentSlide)
    }
    //Prend la valeur actuelle définit sur 0 alors on enlève 1 pour revenir à la longueur
    //sinon on enlève 1 à la slide actuelle
    const previousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? nombreSlides - 1 : currentSlide - 1)
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
