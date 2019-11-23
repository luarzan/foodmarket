import React from 'react';
import './assets/Fonts/Fonts.scss';
import './assets/Styles/App.scss';
import InitialScreen from './Scenes/InitialScreen/InitialScreen';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Recipe from './Scenes/Customer/Scenes/Recipe/Recipe';
import Categories from './Scenes/Customer/Scenes/Categories/Categories';
import Pricing from './Scenes/Customer/Scenes/Pricing/Pricing';
import BuyIt from './Scenes/Customer/Scenes/BuyIt/BuyIt';
import PaymentSucces from './Scenes/Customer/Scenes/PaymentSucces/PaymentSucces';

const App = ()=>{
return(
<div className="App">
            <Router>
                <Switch>
                    <Route path="/u/recipe" component={Recipe} exact/>
                    <Route path="/u/categories" component={Categories} exact/>
                    <Route path="/u/shopping" component={Pricing} exact/>
                    <Route path="/u/buyit" component={BuyIt} exact/>
                    <Route path="/u/succes" component={PaymentSucces} exact/>
                    <Route path="/" component={InitialScreen} exact/>
                    <Redirect from='/' to="/"/>
                </Switch>
            </Router>
</div>
)

};
export default App;