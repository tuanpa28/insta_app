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
    { type: 'divider' },

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
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={240} style={{ backgroundColor: '#f2f0f0' }} trigger={null} collapsible collapsed={collapsed}>
                <div style={{ textAlign: 'center', margin: `${collapsed ? '20px 0 16px' : '26px 0 22px'}` }}>
                    <img
                        src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/361662563_2008056929535886_6055480052581152893_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4AWjKlNJJcoAX9aTD-z&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCEDTCrmAo_l3G-I-O60oy8zNDvrqO9Tw5cy0JX7gogUw&oe=65425044"
                        alt="Img"
                        style={{
                            maxWidth: `${collapsed ? '70%' : '44%'}`,
                            borderRadius: '50%',
                            marginBottom: 2,
                        }}
                    />
                    <p style={{ fontSize: `${collapsed ? '16px' : '24px'}`, fontWeight: 700, marginBottom: 0 }}>
                        Phạm Tuấn
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
                    style={{ background: '#f2f0f0' }}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout style={{ background: colorBgContainer }}>
                <Header style={{ background: colorBgContainer }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                    marginRight: 20,
                                }}
                            />
                            <Search placeholder="Search . . ." size="large" allowClear style={{ width: 260 }} />
                        </div>
                        <div style={{ marginRight: 36 }}>
                            <Avatar
                                style={{ backgroundColor: 'transparent', color: '#1d1d1d' }}
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
                        background: '#f2f0f0',
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
