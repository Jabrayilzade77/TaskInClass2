import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/AdminLayout/MainLayout";
import UserLayout from "./layout/UserLayout/UserLayout";
import Employees from "./pages/AdminPages/Employees";
import AddEmployees from "./pages/AdminPages/AddEmployees";
import Employee from "./pages/UserPages/Employee";
import Basket from "./pages/UserPages/Basket";
import MainSite from "./pages/AdminPages/MainSite";
import EditPage from "./pages/AdminPages/EditPage";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>

      <Route path="/" element={<UserLayout />}>
          <Route index element={<MainSite />} />
          <Route path="employee" element={<Employee />} />
          <Route path="basket" element={<Basket />} />
        </Route>


        <Route path="/admin/" element={<MainLayout />}>
          <Route index element={<MainSite />} />
          <Route path="employees" element={<Employees />} />
          <Route path="add" element={<AddEmployees />} />
          <Route path="edit/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
