import React, { useState } from 'react';
import './Dashboard.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { colourOptions } from './data';

const Dashboard = () => {
    const [isDownload, setDownload] = useState(false);
    function submitButtonHandler() {
        setDownload(true)
    }
    return (
        <>

            <div className='dashboard-body'>
                <div class="sidebar">
                    <a class="active" href="#home">Home</a>
                    <a href="#news">ABC</a>
                    <a href="#contact">ABC</a>
                    <a href="#about">ABC</a>
                </div>
                <div className="dashboard-area">
                    <div className="dashboard-content">
                        <h1 className="text-center">Dashboard Area</h1>
                        <Form>
                            <div className="item">
                                <div className='item-name'>
                                    <Form.Label className="item-1"></Form.Label>
                                </div>
                                <div className='item-select'>
                                    <input class="form-control" type="file" id="formFile"></input>
                                </div>
                            </div>
                            <div className="item">
                                <div className='item-name'>
                                    <Form.Label className="item-1">Selector One</Form.Label>
                                </div>
                                <div className='item-select'>
                                    <Form.Select className="item-2" size='sm'>
                                        <option>select here </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="item">
                                <div className='item-name'>
                                    <Form.Label className="item-1">Selector Two</Form.Label>
                                </div>
                                <div className='item-select'>
                                    <Form.Select className="item-2" size='sm'>
                                        <option>select here </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="item">
                                <div className='item-name'>
                                    <Form.Label className="item-1">Selector Three</Form.Label>
                                </div>
                                <div className='item-select'>
                                    <Select classNames={"item-2"} defaultValue={[]} isMulti name="colors" options={colourOptions}
                                        className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <Button onClick={() => submitButtonHandler()} variant="primary" type="button" className="custom-login-botton">Submit
                            </Button>

                            {isDownload ? <Button variant="primary" type="button" className="custom-login-botton">Download
                            </Button> : null}

                        </Form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;