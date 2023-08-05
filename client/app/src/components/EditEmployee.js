import EmployeeForm from './EmployeeForm'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

const EditEmployee = ({employees, setEmployees}) => {
  const {id} = useParams()
  const navigate = useNavigate()
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
  
  const editEmployee = (employee) => {
    EmployeeService.updateEmployee(id, employee)
      .then( response => {
        console.log(response.data)
        let indexToUpdate = null
        const employeeListToUpdate = employees.map((e, index) => {
          if(e.id == id) {
            indexToUpdate = index
          }
          return e
        })
        employeeListToUpdate[indexToUpdate] = response.data
        setEmployees(employeeListToUpdate)
        navigate('/employees')
        })
        .catch( (err) => console.log(err) )
  }

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
        <EmployeeForm employeeProp = { employee } onSubmitProp = { editEmployee }/>
    </div>
  )
}

export default EditEmployee