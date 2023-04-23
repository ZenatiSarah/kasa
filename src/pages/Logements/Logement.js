import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Logements/Slideshow'
import Rating from '../../components/Logements/Rating'
import Dropdown from '../../components/Logements/Dropdown'
import products from '../../data/Annonces';
import '../../style/slideShow.css'
import '../../style/logement.css'



export default function Logement() {

    const idProduct = useParams();
    const product = products.find((product) => product.id === idProduct.id) //On récupère l'objet qui correspond à l'id de la page.
    const { pictures, title, location, host, tags, rating, description, equipments } = product //On récupère chaque valeur du produit pour l'ajouter sur notre page

    const equipmentsMap = equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    });
    console.log(equipmentsMap)
    return (
        <div className='slideShow-parent'>
            <Slideshow slides={pictures} />
            <div className='produit_description'>
                <div className='description_tags'>
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                    <div className='tagmap'>
                        {tags.map((tag, index) => (
                            <li key={`${tag}-${index}`}>{tag}</li>
                        ))}
                    </div>
                </div>
                <div className='description_host'>
                    <div className='host_name_picture'>
                        <p className='host_name'>{host.name}</p>
                        <img src={host.picture} alt="avatar" />
                    </div>


                    <div className='rating'>
                        <Rating rating={rating} />
                    </div>
                </div>

            </div>
            <div className='dropdown_description_equipements'>
                <Dropdown titre="Description" description={description} />
                <Dropdown titre="Équipement" description={equipmentsMap} />
            </div>
        </div>

    )
}
