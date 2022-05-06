import React, { useState, useEffect } from 'react';
import Router from "../router"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    Link,
    useLocation
} from "react-router-dom";
import { DashboardOutlined, CreditCardOutlined } from '@ant-design/icons';


const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

function BankLayout() {
    const { pathname } = useLocation();
    const [layout, setLayout] = useState(false);

    useEffect(() => {

        setLayout(!pathname.includes('login') && !pathname.includes('register'))

    }, [pathname])


    return(
        layout ?
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                    >
                        <Menu.Item key="Home" icon={<DashboardOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="transactions" icon={<CreditCardOutlined />}>
                            <Link to="/transactions">Transactions</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Router />
                    </Content>
                </Layout>
            </Layout>
        </Layout> : <Router />
    );
}


export default BankLayout;
