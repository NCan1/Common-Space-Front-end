import React from 'react'

import { BtnEditarEspacio } from '../ui/btnsEspacio/BtnEditarEspacio'
import { BtnIrEspacio } from '../ui/btnsEspacio/BtnIrEspacio'
import { BtnSalirEspacio } from '../ui/btnsEspacio/BtnSalirEspacio'

export const EspacioTupla = ({espacio}) => {
    const { nombreEspacio } = espacio

    return (
        <tr className="animate__animated animate__slideInRight">
            <td className="is-vcentered">{ nombreEspacio }</td>

            <td>
                <BtnIrEspacio espacio={espacio}/>
                <BtnEditarEspacio espacio={espacio}/> 
                <BtnSalirEspacio espacio={espacio}/>
                 
            </td>
        </tr>
    )
}
