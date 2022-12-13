import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./Components/ProjectList";
import ProductPage from "./Components/ProductPage";
import ServicePage from "./Components/ServicePage";
import PropertyState from "./Context/Property/PropertyState";
import DashboardTab from "./Components/DashboardTab";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndCondition from "./Components/TermsAndCondition";
import PartnershipSignup from "./Components/PartnershipSignup";
import ServiceSignup from "./Components/ServiceSignup";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <PropertyState>
        {window.location.pathname === "/dashboard" ||
        window.location.pathname === "/login" ? null : (
          <Navbar />
        )}
        <Router basename="/">
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route
              exact
              element={<ProjectList />}
              path="/rera-approved-projects-villa-duplex-flats"
            />
            <Route exact path="/:id" element={<ProductPage />} />
            <Route
              path="/real-estate-service-providers"
              element={<ServicePage />}
            />
            <Route path="/dashboard" element={<DashboardTab />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsAndCondition />} />
            <Route path="/partnershipsignup" element={<PartnershipSignup />} />
            <Route path="/servicesignup" element={<ServiceSignup />} />
          </Routes>
        </Router>
        {window.location.pathname === "/dashboard" ||
        window.location.pathname === "/login" ? null : (
          <Footer />
        )}
      </PropertyState>
    </div>
  );
}

export default App;
