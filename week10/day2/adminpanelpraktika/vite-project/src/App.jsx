
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/MainPages/Home'
import Employees from './Pages/MainPages/Employees';
import AdminPanel from './Pages/MainPages/AdminPanel';
import NoPage from './Pages/MainPages/NoPage';
import MainSite from './Pages/AdminPages/MainSite';
import Employee from './Pages/AdminPages/Employee';
import Mainlayout from './Layout/MainLayout/Mainlayout';
import AdminLayout from './Layout/AdminLayout/AdminLayout';
import AddEmployee from './Pages/AdminPages/AddEmployee';
import UpdatePage from './Pages/AdminPages/UpdatePage';


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route path="/employees" element={<Employees />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
          </Route>
          
          <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/mainSite" element={<MainSite/>} />
            <Route path="/admin/employee" element={<Employee />} />
            <Route path="/admin/add" element={<AddEmployee />} />
            <Route path="/admin/update/:id" element={<UpdatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
