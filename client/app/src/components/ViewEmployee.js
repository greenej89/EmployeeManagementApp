import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

const ViewEmployee = () => {
  const {id} = useParams()
  const [employee, setEmployee] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    EmployeeService.getEmployeeById(id)
    .then( response => {
        setEmployee(response.data)
        setLoading(false)
      })
      .catch( err => console.log(err)) 
  }, [id])

  if(loading) {
    return <p>Loading...</p>
  }
  return (
    <div className='card col-md-5 offset-md-3'>
        <h2 className='text-center'>Employee Details</h2>
        <div className='card-body '>
            <div className='d-flex'>
                <label className='col-3'>First Name: </label>
                <div> {employee.firstName}</div>
            </div>
            <div className='d-flex'>
                <label className='col-3'>Last Name: </label>
                <div> {employee.lastName}</div>
            </div>
            <div className='d-flex'>
                <label className='col-3'>Email: </label>
                <div> {employee.email}</div>
            </div>
        </div>
    </div>
  )
}

export default ViewEmployee