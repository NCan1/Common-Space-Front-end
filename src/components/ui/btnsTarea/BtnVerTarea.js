import React, {useState} from 'react'
import './btnsTarea.css'

export const BtnVerTarea = ({tarea}) => {

    const [tareaModal, setTareaModal] = useState('')

    const openCloseTareaModal = () => {
        (tareaModal==='')
        ? setTareaModal('is-active')
        : setTareaModal('')
    }
    return (
        <>
            <button className="button is-primary is-rounded is-light" onClick={openCloseTareaModal}>
                <i className="fas fa-search"/>
            </button>

            <div className={`modal ${tareaModal}`}>
                <div className="modal-background" onClick={openCloseTareaModal}></div>
                <div className="modal-content">
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
                                    <option defaultValue="DEFAULT" disabled>Escoja una categoría...</option>  
                                    <option>Categoría1</option>
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
                                    <option defaultValue="DEFAULT" disabled>Escoja un periodo de tiempo...</option>  
                                    <option>Cotidiana</option>
                                    <option>Semanal</option>
                                    <option>Bi Semanal</option>
                                </select>
                              </span>                           
                            </p>
                          </div>


                           
                    </div>
                  </section>
                  <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={openCloseTareaModal}>Cerrar</button>
                  </footer>
                </div>
            </div>

        </>
    )
}
