import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dinein from "../foodItem/dinein/Dinein";
import Pickup from "../foodItem/pickup/Pickup";
import Delivery from "../foodItem/delivery/Delivery";

class  AddFoodItemLayout extends Component {
    render(){
        return (
            <Router>
                <Switch >
                    <Route exact path="/" component={Dinein} />
                    <Route  path="/delivery" component={Delivery}/>
                    <Route  path="/pickup" component={Pickup}/>
                </Switch>
            </Router>
        );
    }
}
export default AddFoodItemLayout;
