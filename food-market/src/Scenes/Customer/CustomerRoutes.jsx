import React from 'react';
import {Switch, Route, Redirect} from "react-router";
import Login from './Scenes/Login/Login';
import Register from './Scenes/Register/Register';

const CustomerRoutes = ()=>{

    return(
        <div className="Customer">
            <Switch>
                <Route path="/Login" component={Login} exact/>
                <Route path="/Register" component={Register} exact/>
            </Switch>
        </div>
    )
};
export default CustomerRoutes;