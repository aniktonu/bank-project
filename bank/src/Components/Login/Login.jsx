import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {

    const navigate = useNavigate();
    return (
        <div className='login-body'>
            <div className="login-area">
                <div className="login-form">
                    <h1 className="text-center">Sign In</h1>
                    <Form>
                        <Form.Group>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button className="custom-login-botton" variant="primary" type="submit">
                            <a onClick={() => navigate('/Dashboard')}>Sign In</a>
                        </Button>
                    </Form>
                    <div className="regi-area text-center">
                        <p>Not a Member? <a onClick={() => navigate('/sign-up')}>Sign Up Now</a></p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Login;