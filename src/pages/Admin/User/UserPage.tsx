import { PlusCircleOutlined, LockOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Table, Popconfirm, Space, message, InputRef, Input } from 'antd';
import { FilterConfirmProps } from 'antd/es/table/interface';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import Highlighter from 'react-highlight-words';
import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './User.module.scss';

const cx = classNames.bind(styles);

const UserPage = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const confirm = () => {
        message.success(`Thành công!`);
    };

    const cancel = () => {
        message.error('Đã hủy!');
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSearch = (selectedKeys: string[], confirm: (param?: FilterConfirmProps) => void, dataIndex: any) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getColumnSearchProps = (dataIndex: any): ColumnType<any> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any[] = [
        {
            username: 'pham_tuan',
            email: 'phamanhtuan2833@gmail.com',
            age: 20,
            bio: 'hihi',
            gender: 'male',
            current_city: 'Bắc Từ Liêm, Hà Nội',
        },
        {
            username: 'John Brown',
            email: 'johnbrown@gmail.com',
            age: 32,
            bio: 'kkk',
            gender: 'male',
            current_city: 'New York No. 1 Lake Park',
        },
        {
            username: 'John Brown',
            email: 'johnbrown@gmail.com',
            age: 32,
            bio: 'kkk',
            gender: 'women',
            current_city: 'New York No. 1 Lake Park',
        },
        {
            username: 'John Brown',
            email: 'johnbrown@gmail.com',
            age: 32,
            bio: 'kkk',
            gender: 'male',
            current_city: 'New York No. 1 Lake Park',
        },
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const columns: ColumnsType<any> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
            sorter: {
                compare: (a, b) => a.key - b.key,
                // multiple: 2,
            },
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
            sorter: {
                compare: (a, b) => a.username.localeCompare(b.username),
                multiple: 2,
            },
            ...getColumnSearchProps('username'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: {
                compare: (a, b) => a.email.localeCompare(b.email),
                // multiple: 2,
            },
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: {
                compare: (a, b) => a.age - b.age,
                // multiple: 2,
            },
        },
        Table.EXPAND_COLUMN,
        {
            title: 'Bio',
            dataIndex: 'bio',
            key: 'bio',
            render: (text) => {
                return text.slice(0, 50).concat(' . . .');
            },
        },
        {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender',
            sorter: {
                compare: (a, b) => a.gender.localeCompare(b.gender),
                // multiple: 2,
            },
        },
        {
            title: 'City',
            dataIndex: 'current_city',
            key: 'current_city',
            sorter: {
                compare: (a, b) => a.current_city.localeCompare(b.current_city),
                // multiple: 2,
            },
            ...getColumnSearchProps('current_city'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Popconfirm
                        placement="topRight"
                        title="Vô hiệu hóa người dùng?"
                        description="Bạn có chắc chắn muốn vô hiệu hóa người dùng này không?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="Cancel"
                    >
                        <Button type="primary" danger>
                            <LockOutlined />
                            Disable
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newData = data.map((item: any, index: number) => ({
        ...item,
        key: index + 1,
    }));

    return (
        <>
            <div className={cx('head')}>
                <div>
                    <h2 className={cx('title')}>Users</h2>
                    <p className={cx('intro')}>Manage accounts</p>
                </div>
                <Button type="primary" icon={<PlusCircleOutlined />} size={'large'}>
                    Create Account
                </Button>
            </div>
            <Table
                // pagination={{ pageSize: 8 }}
                size="middle"
                columns={columns}
                dataSource={newData}
                rowSelection={{}}
                expandable={{
                    expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.bio}</p>,
                }}
            />
        </>
    );
};

export default UserPage;
