import React from 'react';
import './assets/Fonts/Fonts.scss';
import './assets/Styles/App.scss';
import InitialScreen from './Scenes/InitialScreen/InitialScreen';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Recipe from './Scenes/Customer/Scenes/Recipe/Recipe';
import Categories from './Scenes/Customer/Scenes/Categories/Categories';

const App = ()=>{
return(
<div className="App">
            <Router>
                <Switch>
                    <Route path="/u/recipe" component={Recipe} exact/>
                    <Route path="/u/categories" component={Categories} exact/>
                    <Route path="/" component={InitialScreen} exact/>
                    <Redirect from='/' to="/"/>
                </Switch>
            </Router>
</div>
)

};
export default App;