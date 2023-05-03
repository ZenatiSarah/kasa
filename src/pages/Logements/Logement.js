import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Logements/Slideshow'
import Rating from '../../components/Logements/Rating'
import Collapse from '../../components/Apropos/Collapse'
import products from '../../data/Annonces';
import '../../style/slideShow.css'
import '../../style/logement.css'



export default function Logement() {

    const idProduct = useParams();
    const product = products.find((product) => product.id === idProduct.id) //On récupère l'objet qui correspond à l'id de la page.

    const equipmentsMap = product?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    });


    return (
        <>
            {product ? (
                <div className='slideShow-parent'>
                    <Slideshow slides={product?.pictures} />
                    <div className='produit_description'>
                        <div className='description_tags'>
                            <h1>{product?.title}</h1>
                            <h2 className='subtitle'>{product?.location}</h2>
                            <div className='tagmap'>
                                {product?.tags.map((tag, index) => (
                                    <li key={`${tag}-${index}`}>{tag}</li>
                                ))}
                            </div>
                        </div>
                        <div className='description_host'>
                            <div className='host_name_picture'>
                                <p className='host_name'>{product?.host.name}</p>
                                <img src={product?.host.picture} alt="avatar" />
                            </div>


                            <div className='rating'>
                                <Rating rating={product?.rating} />
                            </div>
                        </div>

                    </div>
                    <div className='dropdown_description_equipements'>
                        <Collapse titre="Description" description={product?.description} className="description" />
                        <Collapse titre="Équipement" description={equipmentsMap} className="equipment" />
                    </div>
                </div>
            ) : <Navigate replace to='404' />}


        </>
    )
}
