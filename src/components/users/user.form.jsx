import { Button, Input, message, Modal, notification } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        createUser();
        resetAndCloseModal();
    };

    const handleCancel = () => {
        resetAndCloseModal();
    };

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setEmail("");
        setFullName("");
        setPassWord("");
        setPhone("");
    }

    const createUser = async () => {
        const resp = await createUserApi(fullName, email, password, phone);
        if (resp.data) {
            notification.success({
                message: 'Create User',
                description: 'Create User Successfully'
            })
        } else {
            notification.error({
                message: 'Create User',
                description: JSON.stringify(resp.message)
            })
        }
        setIsModalOpen(false);
    }

    return (
        <div className="user-form" style={{margin: '50px', gap: '15px'}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h2>Table Users</h2>
                <Button type="primary" onClick={showModal}>Add New User</Button>
            </div>
            <Modal title="Create User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                    <Input.Password type="password" value={password} onChange={event => setPassWord(event.target.value)}></Input.Password>
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input type="phone" value={phone} onChange={event => setPhone(event.target.value)}></Input>
                </div>
            </Modal>
        </div>
        
    );    
}

export default UserForm