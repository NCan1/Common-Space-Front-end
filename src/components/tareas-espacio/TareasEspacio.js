import React, {useState} from 'react'
import { NavBar } from '../ui/NavBar'

export const TareasEspacio = () => {

    const [inviteModal, setInviteModal] = useState('')
    const [tareaModal, setTareaModal] = useState('')

    const openCloseInviteModal = () => {
        (inviteModal==='')
        ? setInviteModal('is-active')
        : setInviteModal('')
    }

    const openCloseTareaModal = () => {
      (tareaModal==='')
      ? setTareaModal('is-active')
      : setTareaModal('')
  }

    return (
        <div>
            <NavBar/>

            <h1 className="title is-1 is-size-3-touch mt-2">Espacio 1</h1>
            <hr/>
            <h2 className="subtitle is-3 is-size-4-touch">Tareas</h2>

            <button className="button is-primary is-rounded is-light is-pulled-right mr-3" onClick={openCloseInviteModal}> 
              <i className="fas fa-user-plus mr-1"></i> 
              Invitar
            </button>

            <button className="button is-primary is-rounded is-light is-pulled-right mr-3" onClick={openCloseTareaModal}> 
              <i className="fas fa-plus mr-1"></i> 
              Nueva Tarea
            </button>

            
            

{/* aqui va la tabla con los botones */}
        <br/>
        <br/>

            {/* <div className="table-container"> */}
              <table className="table is-fullwidth">
                <tbody>
                    <tr>
                        <td className="is-vcentered">Tarea 1</td>
                        <td>
                            <button className="button is-success is-rounded is-light"><i className="fas fa-check"/></button>
                            <button className="button is-primary is-rounded is-light"><i className="fas fa-search"/></button> 
                            <button className="button is-info is-rounded is-light"><i className="fas fa-edit"/></button> 
                            <button className="button is-danger is-rounded is-light"><i className="fas fa-door-open"/></button> 
                        </td>
                        
                    </tr>
                </tbody>
              </table>
            {/* </div> */}



            <div className={`modal ${inviteModal}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Invitar a Espacio</p>
                    <button className="delete" aria-label="close" onClick={openCloseInviteModal}></button>
                  </header>
                  <section className="modal-card-body">

                    <div className="field has-addons">
                      <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Buscar por Email"/>
                      </div>
                      
                      <div className="control">
                        <button className="button is-info">
                          Buscar
                        </button>
                      </div>
                    </div>


                  </section>
                  <footer className="modal-card-foot">
                    <button className="button">Cerrar</button>
                  </footer>
                </div>
            </div>


            <div className={`modal ${tareaModal}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Crear una nueva Tarea</p>
                    <button className="delete" aria-label="close" onClick={openCloseTareaModal}></button>
                  </header>
                  <section className="modal-card-body">
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control mb-4">
                            <input className="input" type="text" placeholder="ej. Lavar loza"/>
                        </div>

                        <label className="label">Descripción</label>
                        <textarea className="textarea mt-2" placeholder="Escribe la descripción de la tarea aquí." rows="3"></textarea> 

                        <label className="label">Puntaje</label>
                        <div className="field is-horizontal">
                          <div className="control mb-4">
                              <input className="input" type="text" placeholder="2.5"></input>
                          </div>
                          <div className="control mb-4"> 
                              <button className="button is-rounded is-light"><i className="fas fa-plus"/></button>
                          </div>
                          <div className="control mb-4"> 
                              <button className="button is-rounded is-light"><i className="fas fa-minus"/></button>
                          </div>

                        </div>


                        <label className="label">Categoría</label>
                          <div className="field is-horizontal mb-4">
                            <p className="control is-expanded">
                              <span className="select">
                                <select>
                                  <option selected>Categoría1</option>
                                  <option>Categoría2</option>
                                  <option>Categoría3</option>
                                </select>
                              </span>
                            
                            </p>
                          </div>

                        <label className="label">Periodo de tiempo</label>
                        <div className="field is-horizontal mb-4">
                            <p className="control is-expanded">
                              <span className="select">
                                <select>
                                  <option selected>Cotidiana</option>
                                  <option>Semanal</option>
                                  <option>Bi Semanal</option>
                                </select>
                              </span>                           
                            </p>
                          </div>


                           
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
