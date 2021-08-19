import React from 'react'
import { BtnEditarTarea } from '../ui/btnsTarea/BtnEditarTarea';
import { BtnEliminarTarea } from '../ui/btnsTarea/BtnEliminarTarea';
import { BtnRealizarTarea } from '../ui/btnsTarea/BtnRealizarTarea';
import { BtnVerTarea } from '../ui/btnsTarea/BtnVerTarea';

export const TareaTupla = ({tarea}) => {
    const {Nombre} = tarea;

    return (
        <tr className="animate__animated animate__slideInRight">
            <td className="is-vcentered">{Nombre}</td>

            <td>
                <BtnRealizarTarea/>
                <BtnVerTarea tarea={tarea}/> 
                <BtnEditarTarea/>
                <BtnEliminarTarea/>
            </td>
        </tr>
    )
}
