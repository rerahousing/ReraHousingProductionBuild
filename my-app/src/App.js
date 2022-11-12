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

function App() {
  return (
    <div>
      <PropertyState>
        <Navbar />
        <Router>
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route
              element={<ProjectList />}
              path={"/rera-approved-projects-villa-duplex-flats"}
            />
            <Route
              path="/rera-approved-projects-villa-duplex-flats/:id"
              element={<ProductPage />}
            />
            <Route
              path="/real-estate-service-providers"
              element={<ServicePage />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
        <Footer />
      </PropertyState>
    </div>
  );
}

export default App;
