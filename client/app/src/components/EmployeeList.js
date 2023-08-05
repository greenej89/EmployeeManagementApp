import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const EmployeeList = ({employees, setEmployees}) => {

  const deleteEmployee = id => {
    EmployeeService.deleteEmployee(id)
    .then( response => {
      setEmployees( employees.filter( employee => employee.id !== id ))
    })
    .catch( err => console.log( err ))
  }

  return (
    <div>
      <h2 className = "text-center">Employee List</h2>
      <div className="row">
        <Link to={'/employees/new'} className="btn btn-primary w-auto">Add Employee</Link>
      </div>
      <div className="row">
        <table className = "table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map( employee =>
                <tr key = { employee.id }>
                  <td>{ employee.firstName }</td>
                  <td>{ employee.lastName }</td>
                  <td>{ employee.email }</td>
                  <td className='d-flex justify-content-between'>
                    <Link to={`/employees/${employee.id}/edit`} className='btn btn-warning col-3'>Edit</Link>
                    <button className='btn btn-danger col-3' onClick={ e => {deleteEmployee(employee.id)}}>Delete</button>
                    <Link to={`/employees/${employee.id}`} className='btn btn-info col-3'>View</Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList