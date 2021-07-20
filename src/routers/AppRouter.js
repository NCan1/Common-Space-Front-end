import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import {Login} from '../components/auth/Login'
import { UserRoutes } from './UserRoutes';

export const AppRouter = () => {
    return (
        
        <Router>
        <div>
          <Switch>
            <Route exact path="/login" component = {Login}/>
            <Route path="/" component= {UserRoutes} />
            
          </Switch>
        </div>
      </Router>
    )
}
