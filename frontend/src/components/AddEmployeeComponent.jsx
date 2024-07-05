import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId };
        if(id){
            EmployeeService.updateEmployee(employee, id).then(res => {
                console.log(res.data);
                navigate('/employees'); // Navigate to '/employees' after successful submission
                console.log('Employee updated successfully.');
            }).catch(error => {
                console.log('Error while updating employee:', error);
            });

        }
        else{
        EmployeeService.createEmployee(employee)
            .then(res => {
                console.log(res.data);
                navigate('/employees'); // Navigate to '/employees' after successful submission
                console.log('Employee added successfully.');
            })
            .catch(error => {
                console.log('Error while adding employee:', error);
            });
        }
    }


    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id)
                .then(res => {
                    const employee = res.data;
                    setFirstName(employee.firstName);
                    setLastName(employee.lastName);
                    setEmailId(employee.emailId);
                })
                .catch(error => {
                    console.log('Error while fetching employee by id:', error);
                });
        }
    }, [id]);


    const title=()=>{
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }   

    }
    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label htmlFor='firstName'>First Name:</label>
                                    <input
                                        type='text'
                                        id='firstName'
                                        name='firstName'
                                        className='form-control'
                                        placeholder='Enter First Name'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label htmlFor='lastName'>Last Name:</label>
                                    <input
                                        type='text'
                                        id='lastName'
                                        name='lastName'
                                        className='form-control'
                                        placeholder='Enter Last Name'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label htmlFor='emailId'>Email ID:</label>
                                    <input
                                        type='text'
                                        id='emailId'
                                        name='emailId'
                                        className='form-control'
                                        placeholder='Enter Email Id'
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>

                                <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                                <Link to='/employees' className='btn btn-danger ms-2'>Cancel</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;
