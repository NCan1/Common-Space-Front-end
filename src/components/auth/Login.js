import React from 'react'

import './login.css'
import logoConFondo from '../../resources/img/logo-letras.png'

export const Login = ({history}) => {

  const handleLogin = () =>{
    history.push('/mis-espacios')
  }

  return (
      <div className="card container login-card">
          <div className="card-content">
              <div className="columns is-mobile is-centered">
                  
                  <figure className="image is-128x128 ">
                    <img className="" src={logoConFondo} alt="Common Space Logo"/>
                  </figure>
                  
              </div>

              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <button className="button is-success" onClick={handleLogin}>
                    Login
                  </button>
                </p>
              </div>

          </div>
      </div>
  )
}
