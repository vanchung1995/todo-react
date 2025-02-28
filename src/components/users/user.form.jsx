import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async () => {
        const resp = await createUserApi(fullName, email, password, phone);
        if (resp.data) {
            notification.success({
                message: 'Create User',
                description: 'Create User Successfully'
            })
        }
    }

    return (
        <div className="user-form" style={{margin: '50px', gap: '15px'}}>
            <div>
                <span>Full Name</span>
                <Input autoFocus type="text" value={fullName} onChange={event => setFullName(event.target.value)}></Input>
            </div>
            <div>
                <span>Email</span>
                <Input type="text" value={email} onChange={event => setEmail(event.target.value)}></Input>
            </div>
            <div>
                <span>Password</span>
                <Input type="password" value={password} onChange={event => setPassWord(event.target.value)}></Input>
            </div>
            <div>
                <span>Phone Number</span>
                <Input type="phone" value={phone} onChange={event => setPhone(event.target.value)}></Input>
            </div>
            <Button type="primary" onClick={handleClickBtn}>Add New User</Button>
        </div>
    );    
}

export default UserForm