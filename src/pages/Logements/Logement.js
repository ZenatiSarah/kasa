import React from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Logements/Slideshow'
import products from '../../data/Annonces';
import '../../style/slideShow.css'


export default function Logement() {

    const idProduct = useParams();
    const product = products.find((product) => product.id === idProduct.id) //On récupère l'objet qui correspond à l'id de la page.
    const { pictures } = product //On récupère chaque valeur du produit pour l'ajouter sur notre page
    /**
     * title
     * location
     * description
     * host
     * equipments
     * tags
     */
    return (
        <div className='slideShow-parent'><Slideshow slides={pictures} /></div>
    )
}
