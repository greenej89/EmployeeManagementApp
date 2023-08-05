import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
            <div>
              <Link to={'/employees'} className='navbar-brand'>Employee Management App</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header