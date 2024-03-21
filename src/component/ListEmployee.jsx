import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployeeById } from '../service/EmployeeService';
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
    const navigator = useNavigate();
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        getEmployees();
    }, []);

    function getEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }

    function addEmployee() {
        navigator("/add-employee");
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    function deleteEmployee(id) {
        deleteEmployeeById(id).then((response) => {
            getEmployees();
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <div className="container">
            <h2 className='text-center mt-2'>List of employees</h2>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className='text-center'>First name</th>
                        <th className='text-center'>Last name</th>
                        <th className='text-center'>Email</th>
                        <th colSpan={2} className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td className='text-center'><button className='btn btn-info' onClick={() => {
                                    updateEmployee(employee.id);
                                }}>Update</button></td>
                                <td className='text-center'><button className='btn btn-danger' onClick={() => {
                                    deleteEmployee(employee.id);
                                }}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button className='btn btn-primary mb-2' onClick={addEmployee}>Add employee</button>
        </div>
    );
};

export default ListEmployee;