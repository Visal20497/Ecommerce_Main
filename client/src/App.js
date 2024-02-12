import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import About from './pages/About'
import SignIn from './pages/auth/SignIn'
import Signup from './pages/auth/Signup'
import Policy from './pages/Policy'
import PageNotFound from './pages/404'
import ProtectedRoute from './components/route/ProtectedRoute'
import Dashbord from './pages/user/Dashbord'
import ForgetPassword from './pages/auth/ForgetPassword'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/dashbord' element={<ProtectedRoute />}>
          <Route path='' element={<Dashbord />} />
        </Route>
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App