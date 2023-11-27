import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from '@components/navbar'
import routes from '@navigator/routes.json'
import Home from '@pages/home'
import About from '@pages/about'
import Contacts from '@pages/contacts'
 
function App() {

  const Elements = {'home': <Home />, 'about': <About />, 'contacts': <Contacts />}

  return (
    <div className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <main className='h-full'>
          <Routes>
            {Object.entries(routes).map(([key, route]) => {
              let Component = Elements[key as keyof typeof Elements]
                return (
                  <Route key={key} path={route} element={Component} />
                )
            })}
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
