import React from 'react'
import { Link } from 'react-router-dom'
import './btnsEspacio.css'


export const BtnIrEspacio = ({espacio}) => {
    const {idEspacio} = espacio


    return (
        <>
            <Link to={`/mis-espacios/${idEspacio}`} className="button is-primary is-rounded is-light">
                <i className="far fa-share-square "/>
            </Link>  
        </>
    )
}
