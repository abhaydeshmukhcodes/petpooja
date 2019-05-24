import { Menu } from 'antd/lib/index';
import React from "react";

import { Layout } from 'antd/lib/index';
import {Link} from "react-router-dom";

const { Header, Content } = Layout;

export default class Pickup extends React.Component {

    render() {
        return (
            <Layout>
                <Header style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['3']}
                        style={{ lineHeight: '64px', }}
                    >
                        <Menu.Item key="1"><Link to="/">DINE-IN</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/delivery">DELIVERY</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/pickup">PICK-UP</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '10px', marginTop: 10 }}>

                    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                        Welcome to Pick-Up section
                    </div>
                </Content>

            </Layout>
        );
    }
}


