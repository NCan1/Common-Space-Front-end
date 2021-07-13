import React, {useState} from 'react'


import { NavBar } from '../ui/NavBar'

export const EspaciosUser = () => {

    const [modal, setModal] = useState('')

    const openCloseModal = () => {
        (modal==='')
        ? setModal('is-active')
        : setModal('')
    }

 
    return (
        <div>
            <NavBar/>
            
            <h1 className="title is-1 is-size-3-touch mt-2">Mis Espacios</h1>
            <hr/>
            
            <button className="button is-primary is-rounded is-light is-pulled-right mr-3" onClick={openCloseModal}> 
                <span className="icon is-small is-left">
                      <i className="fas fa-home mr-1"></i>
                      <i className="fas fa-plus"></i>
                </span>
            </button>
            

{/* aqui va la tabla con los botones */}
        <br/>
        <br/>

            {/* <div className="table-container"> */}
              <table className="table is-fullwidth">
                <tbody>
                    <tr>
                        <td className="is-vcentered">Nombre espacio</td>
                        <td>
                            <button className="button is-primary is-rounded is-light"><i className="fas fa-search"/></button> 
                            <button className="button is-info is-rounded is-light"><i className="fas fa-edit"/></button> 
                            <button className="button is-danger is-rounded is-light"><i className="fas fa-door-open"/></button> 
                        </td>
                        
                    </tr>
                </tbody>
              </table>
            {/* </div> */}



            <div className={`modal ${modal}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Crear un nuevo Espacio</p>
                    <button className="delete" aria-label="close" onClick={openCloseModal}></button>
                  </header>
                  <section className="modal-card-body">


                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control mb-4">
                            <input className="input" type="text" placeholder="ej. Casa"/>
                        </div>

                        <label className="label">Descripción</label>
                        <textarea className="textarea mt-2" placeholder="Escribe la descripción de tu espacio aquí." rows="4"></textarea>

                        
                    </div>



                    
                  </section>
                  <footer className="modal-card-foot">
                    <button className="button is-success">Crear</button>
                    <button className="button">Cancelar</button>
                  </footer>
                </div>
            </div>




        </div>
    )
}
