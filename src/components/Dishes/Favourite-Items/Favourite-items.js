import React, {Component} from 'react';
import { Link} from "react-router-dom";
import {Col, Layout, Menu} from 'antd/lib/index';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import FavouriteItemsList from "../../../demoData/demoData";
const {  Content,  Sider } = Layout;

class FavouriteItems extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    _createButtonsUI(){
        let cards = [], data = FavouriteItemsList.FavouriteItemsList;
        for (let key in data) {
                cards.push(
                            <Col span={8}>
                                <Button type="primary" style={{height :'60px',width: '120px', textAlign : "center" ,margin:'10px',  whiteSpace: 'unset',backgroundColor:'white', color:'black'}}>{data[key]}</Button>
                            </Col>
                );
            }
        return cards;
    }

    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    style={{backgroundColor:'black'}}

                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor:'black'}}
                    >
                        <Menu.Item key="1">
                            <span><Link to="/">Favourite-Items</Link></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <span><Link to="/Starters">Starters</Link></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <span><Link to="/Soups">Soups</Link></span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <span><Link to="/Indian-Breads">Indian-Breads</Link></span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <span><Link to="/Meal-Boxes">Meal-Boxes</Link></span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <span><Link to="/South-Indian">South-Indian</Link></span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <span><Link to="/Pizza">Pizza</Link></span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <span><Link to="/Ice-cream">Ice-cream</Link></span>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <span><Link to="/Beverages">Beverages</Link></span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <span><Link to="/Liquor">Liquor</Link></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px' ,height: "inherit",backgroundColor:'lightgray' }}>
                        <div style={{ padding: 24, background: 'lightgray' }}>
                                    {this._createButtonsUI()}
                        </div>
                    </Content>

                </Layout>
            </Layout>
        )
    }
}

export default FavouriteItems;
