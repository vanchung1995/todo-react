import { Space, Table, Tag } from 'antd';
import { fetchAllUser } from '../../services/api.service';
import { useState } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    const loadAllUser = async () => {
        const userResp = await fetchAllUser();
        if (userResp.data) setUsers(userResp.data);
    }
    loadAllUser();

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
    ];

    return (
        <Table columns={columns} dataSource={users} />
    );
}
export default UserTable;