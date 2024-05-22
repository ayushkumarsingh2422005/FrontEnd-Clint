import Root from './pages/Root'
import Home from './pages/Home'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Employee from './pages/Employee'
import PageNotFound from './pages/PageNotFound'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/employee' element={<Employee/>} />
      <Route path='/admin' >
        <Route path='login' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
