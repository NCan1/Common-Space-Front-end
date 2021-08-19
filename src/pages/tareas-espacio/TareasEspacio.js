import React, {useEffect} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ModalBtnInvite } from '../../components/modalBtnInvite/ModalBtnInvite'
import { ModalBtnNewTask } from '../../components/modalBtnNewTask/ModalBtnNewTask'
import { TareaTupla } from '../../components/tareaTupla/TareaTupla'
import { tasksStartLoading } from '../../redux/actions/tareasAction'


export const TareasEspacio = () => {

  const dispatch = useDispatch();
  const {espacios}= useSelector(state => state.espacios)
  const {espacioId}= useParams();
  const {tareas} = useSelector(state => state.tareas)

  useEffect(() => {
    dispatch( tasksStartLoading(espacioId) );
  },[dispatch, espacioId] )
  

  const espacio = espacios.filter(e=> e.idEspacio===Number(espacioId))


  //Validar que el espacio exista, de lo contrario utilizar Redirect para enviar a los espacios
  if (espacio.length < 1){
    return <Redirect to="/mis-espacios" />
  }

  if(!tareas){
    return (<div className="control is-large is-loading" />)
  } 

  return (
      <div>
        <h1 className="title is-1 is-size-3-touch mt-2">{`${espacio[0].nombreEspacio}`}</h1>
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
