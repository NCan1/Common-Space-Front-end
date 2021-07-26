import React from 'react'
import { useDispatch } from 'react-redux'

import './login.css'
import logoConFondo from '../../resources/img/logo-letras.png'
import { useForm } from '../../hooks/useForm'
import { login } from '../../redux/actions/auth'

export const Login = ({history}) => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange]= useForm({
    email:'userEjemplo@mail.com',
    password:'123'
  })

  const { email, password } = formValues;

  const handleLogin = () =>{
    // e.preventDefault //Para evitar la propagación del formualrio, en caso de usar etiqueta <form></form> con onSubmit={handleLogin}
    //history.push('/mis-espacios')
    console.log(email+' ' + password);
    dispatch(login('123', 'nombreUser'))
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
                  <input className="input" type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>
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
