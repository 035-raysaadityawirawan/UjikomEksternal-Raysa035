import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import HelpCenter from "./pages/HelpCenter";
import ServiceMotor from "./pages/ServiceMotor";
import SparePartMotor from "./pages/SparePartMotor";
import ServiceMobil from "./pages/ServiceMobil";
import SparePartMobil from "./pages/SparePartMobil";
import AboutUs from "./pages/AboutUs"; // Tambah ini
import Sustainability from "./pages/Sustainability"; // Tambah ini
import Karir from "./pages/Karir"; // Tambah ini
import MotorDetail from "./components/MotorDetail";
import CreditSimulationModal from "./components/CreditSimulationModal";
import BookingServiceModal from "./components/BookingServiceModal";
import CekPromoPage from "./pages/CekPromo";
import Footer from "./components/Footer";

function App() {
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar 
        onCreditClick={() => setShowCreditModal(true)}
        onBookingClick={() => setShowBookingModal(true)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motor" element={<Products />} />
        <Route path="/motor/:id" element={<MotorDetail />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/service-motor" element={<ServiceMotor />} />
        <Route path="/sparepart-motor" element={<SparePartMotor />} />
        <Route path="/service-mobil" element={<ServiceMobil />} />
        <Route path="/sparepart-mobil" element={<SparePartMobil />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Tambah ini */}
        <Route path="/sustainability" element={<Sustainability />} /> {/* Tambah ini */}
        <Route path="/karir" element={<Karir />} /> {/* Tambah ini */}
        <Route path="/promo" element={<CekPromoPage />} />
      </Routes>
      <Footer />
      
      {showCreditModal && (
        <CreditSimulationModal onClose={() => setShowCreditModal(false)} />
      )}
      
      {showBookingModal && (
        <BookingServiceModal onClose={() => setShowBookingModal(false)} />
      )}
    </BrowserRouter>
  );
}

export default App;