import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NoPage from "./pages/NoPage";
import Main from "./Layout/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
