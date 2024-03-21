import React, { useEffect, useState } from 'react';
import { addEmployee, getEmployeeById, updateEmployeeById } from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = () => {
    const [empDetail, setEmpDetail] = useState({
        "firstName": "",
        "lastName": "",
        "email": ""
    });
    const [errors, setErrors] = useState({
        "firstName": "",
        "lastName": "",
        "email": ""
    });
    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            getEmployeeById(id).then((response) => {
                setEmpDetail(response.data);
            }).catch((err) => {
                console.error(err);
            })
        }
    }, [id]);

    function handleEmpChange(event) {
        const {name, value} = event.target;
        setEmpDetail((prevEmp) => ({...prevEmp, [name]:value}));
    }

    function saveEmployee(event) {
        event.preventDefault();

        if(validateEmployeeForm()) {
            const employee = empDetail;

            if(id) {
                updateEmployeeById(id, employee).then((response) => {
                    navigator('/employees');
                }).catch((err) => {
                    console.error(err);
                });
            } else {
                addEmployee(employee).then((response) => {
                    navigator('/employees');
                }).catch((err) => {
                    console.error(err);
                });
            }
        }
    }

    function validateEmployeeForm() {
        let valid = true;
        const error = {... errors};

        if (empDetail.firstName.trim()) {
            error.firstName = "";
        } else {
            error.firstName = "First name is required";
            valid = false;
        }

        if (empDetail.lastName.trim()) {
            error.lastName = "";
        } else {
            error.lastName = "Last name is required";
            valid = false;
        }

        if (empDetail.email.trim()) {
            error.email = "";
        } else {
            error.email = "Email is required";
            valid = false;
        }
        setErrors(error);
        return valid;
    }

    function pageTitle() {
        if(id) {
            return "Update";
        } else {
            return "Add";
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card mt-5 col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center mt-2'>{pageTitle()} employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label' htmlFor='firstName'>First name:</label>
                                <input className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} type='text' name='firstName' value={empDetail.firstName} onChange={handleEmpChange} placeholder='Enter employee first name'/>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}

                                <label className='form-label' htmlFor='lastName'>Last name:</label>
                                <input className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} type='text' name='lastName' value={empDetail.lastName} onChange={handleEmpChange} placeholder='Enter employee last name'/>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

                                <label className='form-label' htmlFor='email'>Email:</label>
                                <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} type='text' name='email' value={empDetail.email} onChange={handleEmpChange} placeholder='Enter employee email'/>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}

                                <button className='btn btn-success mt-2 mb-2' onClick={saveEmployee}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;