import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    const getEmployees = () => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const deleteEmployee = (id) => {
        console.log('Employee ID:', id);
        EmployeeService.deleteEmployee(id).then(res => {
            getEmployees();
        }).catch(error => {
            console.log('Error while deleting employee:', error);
        });
    }

    return (
        <div className='container'>
            <h2 className='text-center mt-4'>List Employee</h2>
            <Link to={'/add-employee'} className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Link to={`/update-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                                        <Link className='btn btn-danger ml-2' onClick={()=> deleteEmployee(employee.id)} style={{marginLeft:"10px"}}>Delete</Link>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;
