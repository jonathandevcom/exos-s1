import React, { FC } from 'react'
import { Layout, Menu } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import { Link } from 'react-router-dom'

const HCLayout: FC = ({ children }) => {
    return (
        <Layout className='header'>
            
            <Header className='header-title'>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['home']}>
                    <Menu.Item key='home'>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key='tp1'>
                        <Link to='/tp1'>TP1</Link>
                    </Menu.Item>
                    <Menu.Item key='tp2'>
                        <Link to='/tp2'>TP2</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            
            <Content className='contentStyle' children={children}></Content>
            <Footer style={{ textAlign: 'center' }}>SE13 CODEUR ©2021 by SEB </Footer>
            
        </Layout>
    )     
}

export default HCLayout