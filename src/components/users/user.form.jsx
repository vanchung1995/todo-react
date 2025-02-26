import { Button, Input } from "antd";

const UserForm = () => {
    return (
        <div className="user-form" style={{margin: '50px'}}>
            <div>
                <span>Full Name</span>
                <Input type="text"></Input>
            </div>
            <div>
                <span>Email</span>
                <Input type="text"></Input>
            </div>
            <div>
                <span>Password</span>
                <Input type="password"></Input>
            </div>
            <div>
                <span>Phone Number</span>
                <Input type="phone"></Input>
            </div>
            <Button type="primary">Add New User</Button>
        </div>
    );    
}

export default UserForm