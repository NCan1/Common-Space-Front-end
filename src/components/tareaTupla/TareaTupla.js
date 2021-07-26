import React from 'react'
import { BtnEditarTarea } from '../ui/btnsTarea/BtnEditarTarea';
import { BtnEliminarTarea } from '../ui/btnsTarea/BtnEliminarTarea';
import { BtnRealizarTarea } from '../ui/btnsTarea/BtnRealizarTarea';
import { BtnVerTarea } from '../ui/btnsTarea/BtnVerTarea';

export const TareaTupla = ({tarea}) => {
    const {nombre} = tarea;

    return (
        <tr className="animate__animated animate__slideInRight">
            <td className="is-vcentered">{nombre}</td>

            <td>
                <BtnRealizarTarea/>
                <BtnVerTarea/> 
                <BtnEditarTarea/>
                <BtnEliminarTarea/>
            </td>
        </tr>
    )
}
