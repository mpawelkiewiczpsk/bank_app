import { useState } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import {Button, Form, Input} from "antd";


export default function Login() {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const onFinish = async (values) => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                values.username,
                values.password
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className="App">
            <Form
                name="basic"
                style={{ marginTop: '60px' }}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <h4> User Logged In: </h4>
            {user?.email}

            <button onClick={logout}> Sign Out </button>
        </div>
    );
}
