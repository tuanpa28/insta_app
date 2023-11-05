import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SolutionOutlined,
    UserOutlined,
    FileTextOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, MenuProps, Input } from 'antd';

const { Header, Sider, Content } = Layout;

import { Link, Outlet } from 'react-router-dom';
import images from '~/assets/images';

const { Search } = Input;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem(<Link to={'/admin'}>Dashboard</Link>, '1', <BarChartOutlined />),
    // { type: 'divider' },

    getItem(
        'Data',
        'grp',
        null,
        [
            getItem(<Link to={'/admin/user'}>Manage Users</Link>, '2', <UserOutlined />),
            getItem(<Link to={'/admin/post'}>Manage Posts</Link>, '3', <FileTextOutlined />),
            getItem(<Link to={'/admin/comment'}>Manage Comments</Link>, '4', <SolutionOutlined />),
        ],
        'group',
    ),
];

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={240} style={{ backgroundColor: '#f2f0f0' }} trigger={null} collapsible collapsed={collapsed}>
                <div style={{ textAlign: 'center', margin: `${collapsed ? '20px 0 16px' : '26px 0 22px'}` }}>
                    <img
                        src={images.noImage}
                        alt="Avatar"
                        style={{
                            maxWidth: `${collapsed ? '70%' : '44%'}`,
                            borderRadius: '50%',
                            marginBottom: 2,
                        }}
                    />
                    <p style={{ fontSize: `${collapsed ? '16px' : '24px'}`, fontWeight: 700, marginBottom: 0 }}>
                        Pham Tuan
                    </p>
                    <p
                        style={{
                            fontSize: `${collapsed ? '14px' : '16px'}`,
                            fontWeight: 400,
                            marginBottom: 0,
                            color: '#00b96b',
                        }}
                    >
                        Admin
                    </p>
                </div>
                <Menu
                    theme="light"
                    style={{ background: '#f2f0f0', border: 'none' }}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout style={{ background: '#fcfcfc' }}>
                <Header style={{ background: '#fcfcfc' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 46,
                                    height: 46,
                                    marginRight: 28,
                                }}
                            />
                            <Search placeholder="Search . . ." size="large" allowClear style={{ width: 260 }} />
                        </div>
                        <div style={{ marginRight: 36 }}>
                            <Avatar
                                style={{
                                    backgroundColor: 'transparent',
                                    color: '#1d1d1d',
                                    cursor: 'pointer',
                                    transform: 'translateY(-10%)',
                                }}
                                size={40}
                                icon={<UserOutlined />}
                            />
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                        padding: 16,
                        // background: '#f2f0f0',
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
