import React,{Component} from 'react';
import './App.css';
import {Row, Col, Table} from 'antd';
import 'antd/dist/antd.css';
import logo from './components/images/logo.png'
import {Button} from 'antd';
import { Icon } from 'antd';


import MainLayout from "./components/Layout/Layout";
import AddFoodItemLayout from "./components/Layout/AddFoodItem";
import MainTable from "./components/Table/Table";
import demoData from "./demoData/demoData";
import MainForm from "./components/Form/Form";



class App extends Component{

    newForm=()=> {
       var NewForm = document.getElementById('bill-table');
       NewForm = <Table dataSource={demoData.dataSourceNull}/>
    };

    render() {
        return (
            <div className="App">
                <div>
                    <Row>
                        <Col span={24} style={{backgroundColor: 'white', height: '60px'}}>
                            <Row>
                                <Col span={4}>
                                    <img src={logo} alt='logo' style={{padding: '10px 10px'}}/>
                                </Col>
                                <Col span={4} style={{position: 'relative', padding: '10px 30px 10px 0px',}}>
                                    <div>
                                        <Button type="primary" style={{
                                            height: '42px',
                                            width: '170px',
                                            padding: '10px 10px',
                                            backgroundColor: 'red',
                                            color: 'white',
                                        }}  onClick = {this.newForm}>NEW ORDER</Button>
                                    </div>
                                </Col>
                                <Col span={8}/>
                                <Col span={8}>
                                    <Row>
                                        <Col span={4}
                                             style={{padding: '10px 10px', position: 'relative', float: 'right'}}>
                                            <Icon type="global" style={{fontSize: '40px', color: '#08c'}}/>
                                        </Col>
                                        <Col span={4}
                                             style={{padding: '10px 10px', position: 'relative', float: 'right'}}>
                                            <Icon type="notification" style={{fontSize: '40px', color: '#08c'}}/>
                                        </Col>
                                        <Col span={4}
                                             style={{padding: '10px 10px', position: 'relative', float: 'right'}}>
                                            <Icon type="clock-circle" style={{fontSize: '40px', color: '#08c'}}/>
                                        </Col>
                                        <Col span={4}
                                             style={{padding: '10px 10px', position: 'relative', float: 'right'}}>
                                            <Icon type="phone" style={{fontSize: '40px', color: '#08c'}}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} style={{height: window.innerHeight}}>
                            <MainLayout />
                        </Col>
                        <Col span={12}>
                            <AddFoodItemLayout/>
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default App;



