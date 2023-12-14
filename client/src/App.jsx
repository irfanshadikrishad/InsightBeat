import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import E404 from "./pages/e404";
import Logout from "./pages/Logout";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<E404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
