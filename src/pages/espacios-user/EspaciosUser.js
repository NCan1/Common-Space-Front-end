import React from 'react'
import { EspacioTupla } from '../../components/espacioTupla/EspacioTupla'

import { ModalBtnNewSpace } from '../../components/modalBtnNewSpace/ModalBtnNewSpace'


export const EspaciosUser = () => {

    const espacios=[
    {
      idEspacio: 1,
      nombre: 'casa'
    },
    {
      idEspacio: 2,
      nombre: 'depa'
    },
    {
      idEspacio: 3,
      nombre: 'cabaña'
    }
  ]

    return (
        <div> 
          <h1 className="title is-1 is-size-3-touch mt-2">Mis Espacios</h1>
          <hr/>

          <ModalBtnNewSpace/>
            
          <br/>
          <br/>

            {/* <div className="table-container"> */}
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
            {/* </div> */}

        </div>
    )
}
