import { NavLink } from 'react-router-dom'
import routes from '@navigator/routes.json'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to={'/'} className='w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-lg font-bold'>
            <p className='blue-gradient_text'>KE</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <>
                {Object.entries(routes).map(([key, route]) => {
                    return (
                        <NavLink key={route} to={route} className={(({ isActive }) => isActive ? 'text-blue-500' : 'text-black')}>{key}</NavLink>
                    )
                })}
            </>
        </nav>
    </header>
  )
}

export default Navbar
