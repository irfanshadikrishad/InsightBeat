import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
