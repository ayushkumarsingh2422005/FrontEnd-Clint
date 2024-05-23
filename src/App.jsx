import Root from './pages/Root'
import Home from './pages/Home'
import Login from './pages/admin/Login'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Employee from './pages/employee/Employee'
import PageNotFound from './pages/PageNotFound'
import ManageItems from './pages/admin/ManageItems'
import Dashbord from './pages/admin/AdminHome/Dashbord'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/employee' element={<Employee/>} />
      <Route path='/admin' >
        <Route path='' element={<Dashbord/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='manage-items' element={<ManageItems/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
