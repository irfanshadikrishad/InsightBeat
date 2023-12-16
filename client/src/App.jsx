import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import E404 from "./pages/e404";
import Logout from "./pages/Logout";
import Fashion from "./pages/Fashion";
import Lifestyle from "./pages/Lifestyle";
import Travel from "./pages/Travel";
import Beauty from "./pages/Beauty";
import Politics from "./pages/Politics";

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
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="*" element={<E404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
