import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logoLetras from '../../resources/img/Logo-Texto-1700x230.png'
//Logo-Texto-600x81.png
//Logo-Texto-1700x230.png
import { startLogout } from '../../redux/actions/authAction'

export const NavBar = () => {
    const [menuState, setMenuState] = useState('')
    const dispatch = useDispatch()

    const clickMenu = () =>{
        (menuState==='')
        ? setMenuState('is-active')
        : setMenuState('')
    }

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div>
            <nav className="navbar is-black " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img src={logoLetras} alt="Common Space Logo" width="300" height="41"/>
                    
                    <div role="button" className= {`navbar-burger ${menuState}`} onClick={clickMenu} aria-label="menu" aria-expanded="false" data-target="navMenu" href="#">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div className={`navbar-menu ${menuState}`} id="navMenu">
                    <div className="navbar-end">
                        <div className={`navbar-item has-dropdown ${menuState}`}>
                            <button className="navbar-link button is-ghost is-medium is-hidden-touch" onClick={clickMenu} >
                                Menu
                            </button>
                        
                            <div className="navbar-dropdown is-right">
                              <div className="navbar-item button is-primary is-inverted">
                                Mi Perfil
                              </div>
                              <div className="navbar-item button is-primary is-inverted">
                                Mis Espacios
                              </div>
                        
                              <hr className="navbar-divider"/>
                              <div className="navbar-item button is-danger is-inverted" onClick={handleLogout}>
                                Salir
                              </div>
                            </div>

                        </div>
                     </div>
                </div>




                
            </nav>
        </div>
    )
}
