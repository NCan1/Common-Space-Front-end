import React, {useState} from 'react'

export const ModalBtnNewSpace = () => {
    const [modal, setModal] = useState('')

    const openCloseModal = () => {
        (modal==='')
        ? setModal('is-active')
        : setModal('')
    }

    return (
        <div>
            <button className="button is-primary is-rounded is-light is-pulled-right mr-3" onClick={openCloseModal}> 
                <span className="icon is-small is-left">
                      <i className="fas fa-home mr-1"></i>
                      <i className="fas fa-plus"></i>
                </span>
            </button>

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
