import React from 'react'
import { BtnEditarEspacio } from '../ui/btnsEspacio/BtnEditarEspacio'
import { BtnIrEspacio } from '../ui/btnsEspacio/BtnIrEspacio'
import { BtnSalirEspacio } from '../ui/btnsEspacio/BtnSalirEspacio'

export const EspacioTupla = ({espacio}) => {
    const { nombre } = espacio

    return (
        <tr>
            <td className="is-vcentered">{nombre}</td>

            <td>
                <BtnIrEspacio/>
                <BtnEditarEspacio/> 
                <BtnSalirEspacio/>
                 
            </td>
        </tr>
    )
}
