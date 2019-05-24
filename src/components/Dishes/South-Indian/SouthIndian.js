import React, {Component} from 'react';
import { Link} from "react-router-dom";
import { Layout, Menu} from 'antd/lib/index';
import 'antd/dist/antd.css';



const { Header, Content,  Sider } = Layout;

class SouthIndian extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['6']} mode="inline" >
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
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>

                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Its South-indian Section.
                        </div>
                    </Content>

                </Layout>
            </Layout>
        )
    }
}

export default SouthIndian;
