import React, { useEffect, useState } from 'react';
import { listEmployees } from '../service/EmployeeService';
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
    const navigator = useNavigate();
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    function addEmployee() {
        navigator("/add-employee");
    }

    return (
        <div className="container">
            <h2 className='text-center'>List of employees</h2>
            <button className='btn btn-primary mb-2' onClick={addEmployee}>Add employee</button>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployee;