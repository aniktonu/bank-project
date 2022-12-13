import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Signup.css';
import { useNavigate } from 'react-router-dom';






const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className='login-body'>
            <div className="login-area">
                <div className="login-form">
                    <h1 className="text-center">SIGN UP</h1>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button className="custom-login-botton" variant="primary" type="submit">
                            <a onClick={() => navigate('/')}>Sign In</a>
                        </Button>
                    </Form>
                    <div className="regi-area text-center">
                        <p>Allready a Member? <a onClick={() => navigate('/')}>Sign In Now</a></p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Signup;