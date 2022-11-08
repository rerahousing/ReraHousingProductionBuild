import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./Components/ProjectList";
import ProductPage from "./Components/ProductPage";
import ServicePage from "./Components/ServicePage";
import PropertyState from "./Context/Property/PropertyState";
import Dashboard from "./Components/Dashboard";
import InputForm from "./Components/InputForm.js";
import ImageUpload from "./Components/ImageUpload";

function App() {
  return (
    <div>
      <PropertyState>
        <Navbar />
        <Router>
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route element={<ProjectList />} path={"/projects"} />
            <Route path="/projects/:id" element={<ProductPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/image" element={<ImageUpload />} />
          </Routes>
        </Router>
        <Footer />
      </PropertyState>
    </div>
  );
}

export default App;
