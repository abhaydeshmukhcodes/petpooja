import React, {Component} from 'react';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Liquor from "../Dishes/Liquor/Liquor";
import Beverages from "../Dishes/Beverages/Beverages";
import IceCream from "../Dishes/Ice-cream/IceCream";
import Pizza from "../Dishes/Pizza/Pizza";
import SouthIndian from "../Dishes/South-Indian/SouthIndian";
import MealBoxes from "../Dishes/Meal-Boxes/MealBoxes";
import IndianBreads from "../Dishes/Indian-Breads/IndianBreads";
import Soups from "../Dishes/Soups/Soups";
import Starters from "../Dishes/Starters/Starters";
import FavouriteItems from "../Dishes/Favourite-Items/Favourite-items";

class  MainLayout extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={FavouriteItems}/>
                    <Route  path="/Starters" component={Starters}/>
                    <Route  path="/Soups" component={Soups}/>
                    <Route  path="/Indian-Breads" component={IndianBreads}/>
                    <Route  path="/Meal-Boxes" component={MealBoxes}/>
                    <Route  path="/South-Indian" component={SouthIndian}/>
                    <Route  path="/Pizza" component={Pizza}/>
                    <Route  path="/Ice-cream" component={IceCream}/>
                    <Route  path="/Beverages" component={Beverages}/>
                    <Route  path="/Liquor" component={Liquor}/>
                </Switch>
            </Router>
        );
    }
}
export default MainLayout;
