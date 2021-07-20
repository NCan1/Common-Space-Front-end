import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

import { ModalBtnInvite } from '../../components/modalBtnInvite/ModalBtnInvite'
import { ModalBtnNewTask } from '../../components/modalBtnNewTask/ModalBtnNewTask'
import { TareaTupla } from '../../components/tareaTupla/TareaTupla'


export const TareasEspacio = () => {

  const {espacioId}= useParams();
  console.log(espacioId);

  //TODO: Con el espacioID se consultan las tareas de dicho espacio y se dibujan abajo.

  //Validar que el espacio exista, de lo contrario utilizar Redirect para enviar a los espacios
  if (!espacioId){
    return <Redirect to="/mis-espacios" />
  }

  const tareas = [
    {
      idTarea: 1,
      nombre: "tarea 1"
    },
    {
      idTarea: 2,
      nombre: "tarea 2"
    },
    {
      idTarea: 3,
      nombre: "tarea 3"
    }
  ]

    return (
        <div>
          <h1 className="title is-1 is-size-3-touch mt-2">Espacio 1</h1>
          <hr/>
          <h2 className="subtitle is-3 is-size-4-touch">Tareas</h2>
          <ModalBtnInvite/>
          <ModalBtnNewTask/>
          <br/>
          <br/>

          <table className="table is-fullwidth">
            <tbody>
                  {
                    tareas.map(e =>(
                      <TareaTupla key={e.idTarea} tarea={e}/>
                      )
                    )
                  }
            </tbody>
          </table>

        </div>
    )
}
