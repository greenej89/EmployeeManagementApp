import './App.css';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import ViewEmployee from './components/ViewEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useState, useEffect} from 'react'
import EmployeeService from './services/EmployeeService'

function App() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    setLoading(true)
    EmployeeService.getEmployees()
      .then( response => {
        setEmployees(response.data)
        setLoading(false)
      })
      .catch( (err) => console.log(err) )
  }, [])

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div className='App'>
      <Router>
          <Header/>
          <div className='container'>
            <Routes>
              <Route exact path='/employees' element={<EmployeeList employees={employees} setEmployees={setEmployees}/>} />
              <Route exact path='/employees/new' element={<CreateEmployee employees={employees} setEmployees={setEmployees}/>} />
              <Route exact path='/employees/:id/edit' element={<EditEmployee employees={employees} setEmployees={setEmployees}/>} />
              <Route exact path='/employees/:id' element={<ViewEmployee/>} />
            </Routes>
          </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
