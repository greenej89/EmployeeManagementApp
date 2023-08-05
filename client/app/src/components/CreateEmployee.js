import EmployeeForm from './EmployeeForm'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const CreateEmployee = ({employees, setEmployees}) => {
  const navigate = useNavigate()
  
  const createEmployee = employee => {
    EmployeeService.createEmployee(employee)
      .then( response => {
        setEmployees([...employees, response.data])
        navigate('/employees')
      })
      .catch( (err) => console.log(err) )
  }

  return (
    <div>
        <EmployeeForm
            employeeProp = { {firstName:'', lastName:'', email:''} }
            onSubmitProp = { createEmployee }
        />    
    </div>
  )
}

export default CreateEmployee