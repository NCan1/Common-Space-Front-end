import React, {useState} from 'react'

export const ModalBtnInvite = () => {
    const [inviteModal, setInviteModal] = useState('')
    

    const openCloseInviteModal = () => {
        (inviteModal==='')
        ? setInviteModal('is-active')
        : setInviteModal('')
    }

    return (
        <div>
            <button className="button is-primary is-rounded is-light is-pulled-right mr-3" onClick={openCloseInviteModal}> 
              <i className="fas fa-user-plus mr-1"></i> 
              Invitar
            </button>


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


        </div>
    )
}
