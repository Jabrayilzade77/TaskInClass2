import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import Employees from "./pages/AdminPages/Employees";
import MainSite from "./pages/AdminPages/MainSite";
import Employee from "./pages/MainPages/Employee";
import AdminPanel from "./pages/MainPages/AdminPanel";
import AddEmployees from "./pages/AdminPages/AddEmployees";
import UpdatePage from "./pages/AdminPages/UpdatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/employee" element={<Employee />} />
            <Route path="/admin" element={<AdminPanel />}/>
          </Route>
          <Route path="admin/" element={<AdminLayout />}>
            <Route path="mainsite" element={<MainSite />} />
            <Route path="add" element={<AddEmployees />} />
            <Route path="update/:id" element={<UpdatePage />} />
            <Route path="employees" element={<Employees />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
