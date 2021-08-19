import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './login.css'
import logoConFondo from '../../resources/img/logo-letras.png'
import { useForm } from '../../hooks/useForm'
import { startLogin } from '../../redux/actions/authAction'

export const Login = ({history}) => {
  
  const dispatch = useDispatch()
  const {idUser}= useSelector(state => state.auth)

  const [loading, setLoading] = useState(false)

  const [formValues, handleInputChange]= useForm({
    email:'asd@asd.com',
    password:'123'
  })

  const { email, password } = formValues;

  const handleLogin = async () =>{
    //e.preventDefault //Para evitar la propagación del formualrio, en caso de usar etiqueta <form></form> con onSubmit={handleLogin}
    setLoading(true)
    //console.log(email+' ' + password);
    await dispatch(startLogin(email, password))
    setLoading(false)
    
  }

  useEffect(() => {
    if(idUser){
      console.log("efecto login");
      setLoading(false)
      history.push('/mis-espacios')
    }
  }, [dispatch, idUser, history])

  return (
    <div id="login-screen">

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
                  <button className={`button is-success ${loading ?'is-loading' :''}`} onClick={handleLogin} disabled={loading}>
                    Login
                  </button>
                </p>
              </div>

          </div>
      </div>


      </div>
  )
}
