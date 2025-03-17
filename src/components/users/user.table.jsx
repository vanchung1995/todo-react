import { Space, Table, Tag } from 'antd';
import { fetchAllUser } from '../../services/api.service';
import { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadAllUser();
    }, []);
    
    const loadAllUser = async () => {
        const userResp = await fetchAllUser();
        if (userResp.data) setUsers(userResp.data);
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{display: 'flex', gap: '10px'}}>
                    <a><EditOutlined style={{cursor: 'pointer', color: 'orange'}}/> </a>
                    <a><DeleteOutlined style={{ cursor: 'pointer', color: 'red' }} /></a>
                </div>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={users} rowKey={"_id"}/>
    );
}
export default UserTable;