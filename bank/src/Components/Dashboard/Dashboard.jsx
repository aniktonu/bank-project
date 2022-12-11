import React from 'react';
import './Dashboard.css';
import Form from 'react-bootstrap/Form';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


const Dashboard = () => {
    return (
        <>
            <div className='dashboard-body'>
                <div className="dashboard-area">

                    {/* <div className="dashboard-sidebar">
                        <div className="w3-sidebar w3-light-grey w3-bar-block">
                            <h3 className="w3-bar-item">Menu</h3>
                            <a className="w3-bar-item w3-button">Link 1</a>
                            <a className="w3-bar-item w3-button">Link 2</a>
                            <a className="w3-bar-item w3-button">Link 3</a>
                        </div>
                    </div> */}
                    <div className="dashboard-content">
                        <div className="item">
                            <Form.Label className="item-1">Selector One</Form.Label>
                            <Form.Select className="item-2" size='sm'>
                                <option>select here </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className="item">
                            <Form.Label className="item-1">Selector Two</Form.Label>
                            <Form.Select className="item-2" size='sm'>
                                <option>select here </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            {/* <div className="item" className="item-3">
                                <DropdownMultiselect
                                    options={["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"]}
                                    name="option" />

                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;