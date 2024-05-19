
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminNavbar from './layout/adminLayout/AdminNavbar';
import HomePage from './pages/adminPages/HomePage';
import Employees from './pages/adminPages/Employees';
import AddEmployees from './pages/adminPages/AddEmployees';
import UpdatePage from './pages/adminPages/UpdatePage';
import DetailPage from './pages/adminPages/DetailPage';
import MainProvider from './context/MainProvider';
import BasketPage from './pages/adminPages/BasketPage';
import WishListProvider from './context/WishListProvider';
import WishList from './pages/adminPages/WishList';

function App() {

  return (
    <>
    <MainProvider>
      <WishListProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="add" element={<AddEmployees />} />
          <Route path="edit/:id" element={<UpdatePage />} />
          <Route path="detail/:detailId" element={<DetailPage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </WishListProvider>
    </MainProvider>
    </>
  )
}

export default App
