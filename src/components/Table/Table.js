import {Button, Col, Menu, Row,} from 'antd/lib/index';
import React from 'react';
import { Layout } from 'antd/lib/index';
import {Link} from "react-router-dom";

import {
    Dropdown, Icon,
} from 'antd/lib/index';
import MainForm from "../Form/Form";

const { Header, Content,  } = Layout;

export default class MainTable extends React.Component {

    onClick = ({ key }) => {
        console.log(`Click on item ${key}`);
    };
    tableMenu = (
        <Menu onClick={this.onClick}>
            <Menu.Item key="1"><Link exact to="/">1</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/1">2</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/2">3</Link></Menu.Item>
        </Menu>

    );
    billMenu = (
        <Menu onClick={this.onClick}>
            <Menu.Item key="1"><Link to="/2">1</Link></Menu.Item>
            <Menu.Item key="2"><Link exact to="/">2</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/1">3</Link></Menu.Item>
        </Menu>
    );
    render() {
        return (
            <Layout>
                <Header style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to="/">DINE-IN</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/delivery">DELIVERY</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/pickup">PICK-UP</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '10px', marginTop: 10 }}>

                    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                        <Row>
                            <Col span={12}>
                                <Dropdown overlay={this.tableMenu}>
                                    <a className="ant-dropdown-link" href="#" style={{color :'black',}}>
                                        <Button type="primary" style={{width:'300px',height:'40px'}}>Select Table Number</Button> <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </Col>
                            <Col span={12}>
                                <Dropdown overlay={this.billMenu}>
                                    <a className="ant-dropdown-link" href="#" style={{color :'black'}}>
                                        <Button type="primary" style={{width:'300px',height:'40px'}}>Select Bill Number</Button>  <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </Col>
                            <MainForm dataSource={this.props.dataSource}  />
                        </Row>
                    </div>
                </Content>
            </Layout>
        );
    }
}


