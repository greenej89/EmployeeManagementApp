import { useState } from 'react'
import { Link } from 'react-router-dom'

const EmployeeForm = ({employeeProp, onSubmitProp}) => {

    const [employee, setEmployee] = useState(employeeProp)

    const onChangeHandler = e => {
        const name = e.target.name
        const value = e.target.value
        setEmployee( values => ({ ...values, [name]: value}))
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        console.log("Saving employee:" + employee.firstName + ", " +employee.lastName + ", " + employee.email)
        onSubmitProp(employee)
    }
    return (
        <div className='card col-md-6 offset-md-3'>
            <h3 className='text-center'>
                {
                    employee.firstName==='' ? <span>Add Employee</span>
                    :<span>Edit Employee</span>
                }
            </h3>  
            <div className='card-body'>
                <form onSubmit={ onSubmitHandler }>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='firstName'>First Name:</label>
                        <input className='form-control' type='text' id='firstName'
                            name='firstName' onChange = { onChangeHandler } value = {employee.firstName}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='lastName'>Last Name:</label>
                        <input className='form-control' type='text' id='lastName'
                            name='lastName' onChange = { onChangeHandler} value = {employee.lastName}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='email'>Email:</label>
                        <input className='form-control' type='email' id='email'
                            name='email' onChange = { onChangeHandler } value = {employee.email}
                        />
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <button className='btn btn-success col-4' type="submit">Save</button> 
                        <Link to={'/employees'} className='btn btn-danger col-4'>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeForm