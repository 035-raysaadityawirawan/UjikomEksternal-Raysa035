import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ onCreditClick, onBookingClick }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-[var(--honda-red)] text-white sticky top-0 z-40">
      {/* Baris 1: Logo dan Menu Utama */}
      <div className="flex justify-between items-center px-10 py-4 border-b border-red-700">
        <h1 className="text-2xl font-bold">ASTRA HONDA</h1>
        
        <div className="flex gap-8 items-center">
          <Link to="/" className="hover:text-red-200 transition" onClick={closeDropdown}>
            Home
          </Link>
          <Link to="/motor" className="hover:text-red-200 transition font-medium" onClick={closeDropdown}>
            Product
          </Link>

          {/* Dropdown After Sales */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('afterSales')}
              className="font-medium hover:text-red-200 transition flex items-center gap-1"
            >
              After Sales
              <span className={`transition ${openDropdown === 'afterSales' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdown === 'afterSales' && (
              <div className="absolute top-full left-0 bg-white shadow-lg mt-1 rounded w-56 z-50">
                {/* Service Motor */}
                <div className="border-b border-gray-700">
                  <p className="px-4 py-2 text-xs font-bold text-red-400">🏍️ SERVICE MOTOR</p>
                  <Link 
                    to="/service-motor" 
                    onClick={closeDropdown}
                    className="block px-6 py-2 hover:bg-gray-800 transition text-black"
                  >
                    Service Motor
                  </Link>
                  <Link 
                    to="/sparepart-motor" 
                    onClick={closeDropdown}
                    className="block px-6 py-2 hover:bg-gray-800 transition text-black border-b border-gray-700"
                  >
                    Spare Part Motor
                  </Link>
                </div>

                {/* Service Mobil */}
                <div className="border-b border-gray-700">
                  <p className="px-4 py-2 text-xs font-bold text-blue-400">🚗 SERVICE MOBIL</p>
                  <Link 
                    to="/service-mobil" 
                    onClick={closeDropdown}
                    className="block px-6 py-2 hover:bg-gray-800 transition text-black"
                  >
                    Service Mobil
                  </Link>
                  <Link 
                    to="/sparepart-mobil" 
                    onClick={closeDropdown}
                    className="block px-6 py-2 hover:bg-gray-800 transition text-black border-b border-gray-700"
                  >
                    Spare Part Mobil
                  </Link>
                </div>

                {/* Booking Service */}
                <button
                  onClick={() => {
                    onBookingClick();
                    closeDropdown();
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-800 transition text-black"
                >
                  📅 Booking Service
                </button>
              </div>
            )}
          </div>

          {/* Dropdown Corporate */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('corporate')}
              className="font-medium hover:text-red-200 transition flex items-center gap-1"
            >
              Corporate
              <span className={`transition ${openDropdown === 'corporate' ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdown === 'corporate' && (
              <div className="absolute top-full left-0 bg-white shadow-lg mt-1 rounded w-48 z-50">
                <Link 
                  to="/about-us" 
                  onClick={closeDropdown}
                  className="block px-4 py-3 hover:bg-gray-800 transition border-b border-gray-700 text-black"
                >
                  About Us
                </Link>
                <Link 
                  to="/sustainability" 
                  onClick={closeDropdown}
                  className="block px-4 py-3 hover:bg-gray-800 transition border-b border-gray-700 text-black"
                >
                  Sustainability
                </Link>
                <Link 
                  to="/karir" 
                  onClick={closeDropdown}
                  className="block px-4 py-3 hover:bg-gray-800 transition text-black"
                >
                  Karir
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Baris 2: Action Buttons - Rata Kanan */}
      <div className="flex justify-end gap-0 px-10 py-3 bg-red-700 flex-wrap">
        <Link 
          to="/help-center" 
          className="px-4 py-2 text-sm font-medium text-white hover:bg-red-800 rounded transition"
        >
          Help Center
        </Link>
        <div className="w-px bg-red-600"></div>
        <button 
          className="px-4 py-2 text-sm font-medium text-white hover:bg-red-800 rounded transition"
        >
          Join Community
        </button>
        <div className="w-px bg-red-600"></div>
        <button 
          onClick={onCreditClick}
          className="px-4 py-2 text-sm font-medium text-white hover:bg-red-800 rounded transition"
        >
          Credit Simulation
        </button>
        <div className="w-px bg-red-600"></div>
        <button 
          onClick={onBookingClick}
          className="px-4 py-2 text-sm font-medium text-white hover:bg-red-800 rounded transition"
        >
          Booking Service
        </button>
        <div className="w-px bg-red-600"></div>
        <Link 
          to="/promo" 
          className="px-4 py-2 text-sm font-medium text-white hover:bg-red-800 rounded transition"
        >
          Cek Promo
        </Link>
      </div>
    </nav>
  );
}