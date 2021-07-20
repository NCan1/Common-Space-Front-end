import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';
import { EspaciosUser } from '../pages/espacios-user/EspaciosUser';
import { TareasEspacio } from '../pages/tareas-espacio/TareasEspacio';

export const UserRoutes = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <Switch>
                    <Route exact path="/mis-espacios" component = {EspaciosUser}/>
                    <Route exact path="/mis-espacios/:espacioId" component = {TareasEspacio}/>
                    <Redirect to="/login"/>
                </Switch>
            </div>
        </>
    )
}
