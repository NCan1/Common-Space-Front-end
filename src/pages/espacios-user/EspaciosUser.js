import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { EspacioTupla } from '../../components/espacioTupla/EspacioTupla'
import { ModalBtnNewSpace } from '../../components/modalBtnNewSpace/ModalBtnNewSpace'
import { spacesStartLoading } from '../../redux/actions/espaciosAction'


export const EspaciosUser = () => {

  const dispatch = useDispatch();
  //const {idUser}= useSelector(state =>state.auth)
  const {espacios}= useSelector(state => state.espacios)
  
  useEffect(() => {
    dispatch( spacesStartLoading(1) );//idUser
  },[dispatch] )

  
  if(!espacios){
    return (<div className="control is-large is-loading" />)
  } 

 
  return (
      <div> 
        <h1 className="title is-1 is-size-3-touch mt-2">Mis Espacios</h1>
        <hr/>
        <ModalBtnNewSpace/>  
        <br/>
        <br/>

            <table className="table is-fullwidth">
              <tbody>
              {
                espacios.map(e =>(
                  <EspacioTupla key={e.idEspacio} espacio={e}/>
                  )
                )
              }  
              </tbody>
            </table>
     
      </div>
  )
}
