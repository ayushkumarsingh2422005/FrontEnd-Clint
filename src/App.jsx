import Root from './pages/Root'
import Home from './pages/Home'
import AdminLogin from './pages/admin/Login'
import EmployeeLogin from './pages/Login'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Employee from './pages/employee/Employee'
import PageNotFound from './pages/PageNotFound'
import ManageItems from './pages/admin/ManageItems'
import Dashbord from './pages/admin/AdminHome/Dashbord'
import ManageOrders from './pages/admin/ManageOrders'
import ManageEmploye from './pages/admin/ManageEmploye'
import Invoice from './pages/admin/Invoice'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<EmployeeLogin />} />
      <Route path='/employee' element={<Employee/>} />
      <Route path='/admin' >
        <Route path='' element={<Dashbord/>}/>
        <Route path='login' element={<AdminLogin/>}/>
        <Route path='manage-items' element={<ManageItems/>}/>
        <Route path='manage-orders' element={<ManageOrders/>}/>
        <Route path='manage-employe' element={<ManageEmploye/>}/>
        <Route path='invoice/:id' element={<Invoice/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
