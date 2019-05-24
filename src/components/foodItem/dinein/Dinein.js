
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import demoData from '../../../demoData/demoData'
import Delivery from "../delivery/Delivery";
import Pickup from "../pickup/Pickup";
import MainTable from '../../Table/Table'
class  Dinein extends Component {
    render(){
        return (
            <Router>
                <Switch >
                    <Route exact path="/" component={() => <MainTable dataSource={demoData.dataSource} />} />
                    <Route  path="/delivery" component={Delivery}/>
                    <Route  path="/pickup" component={Pickup}/>
                    <Route  path="/1" component={() => <MainTable dataSource={demoData.dataSource2} />}/>
                    <Route  path="/2" component={() => <MainTable dataSource={demoData.dataSource3} />}/>
                </Switch>
            </Router>
        );
    }
}
export default Dinein;

