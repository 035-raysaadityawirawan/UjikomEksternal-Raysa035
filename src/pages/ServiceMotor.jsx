import React, { useState } from 'react';

export default function ServiceMotor() {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      id: 1,
      name: "General Service",
      price: "Rp 250.000",
      duration: "30 menit",
      description: "Perawatan rutin: ganti oli, filter, pengecekan umum",
      includes: ["Ganti Oli", "Ganti Filter Udara", "Pembersihan", "Pengecekan Busi"]
    },
    {
      id: 2,
      name: "Besar Service",
      price: "Rp 1.000.000",
      duration: "2-3 jam",
      description: "Perawatan menyeluruh dengan penggantian komponen tertentu",
      includes: ["Ganti Oli", "Ganti Filter", "Penggantian Kampas Rem", "Penggantian Rantai", "Alignment Roda"]
    },
    {
      id: 3,
      name: "Tune Up",
      price: "Rp 500.000",
      duration: "1-2 jam",
      description: "Penyetelan mesin untuk performa optimal",
      includes: ["Setelan Karburator", "Pembersihan Injector", "Setelan Timing", "Pengecekan Emisi"]
    },
    {
      id: 4,
      name: "Perbaikan Mesin",
      price: "Konsultasi",
      duration: "Bervariasi",
      description: "Perbaikan untuk masalah mesin yang lebih kompleks",
      includes: ["Diagnosa Mesin", "Perbaikan Komponen", "Penggantian Suku Cadang", "Test Drive"]
    },
    {
      id: 5,
      name: "Penggantian Ban",
      price: "Rp 300.000 - 800.000",
      duration: "1 jam",
      description: "Penggantian ban dengan produk original Honda",
      includes: ["Penggantian Ban", "Balancing", "Penjajaran", "Pengecekan Tekanan"]
    },
    {
      id: 6,
      name: "Service Rem",
      price: "Rp 400.000",
      duration: "1-2 jam",
      description: "Perawatan khusus sistem pengereman",
      includes: ["Pembersihan Rem", "Penggantian Kampas", "Penggantian Cairan Rem", "Test Rem"]
    }
  ];

  const servicePackages = [
    {
      id: 1,
      name: "Paket Silver",
      price: "Rp 1.500.000",
      duration: "1 tahun",
      benefits: [
        "4x General Service gratis",
        "1x Besar Service gratis",
        "Konsultasi gratis",
        "Diskon suku cadang 10%"
      ]
    },
    {
      id: 2,
      name: "Paket Gold",
      price: "Rp 2.500.000",
      duration: "1 tahun",
      benefits: [
        "Unlimited General Service",
        "2x Besar Service gratis",
        "Konsultasi gratis",
        "Diskon suku cadang 15%",
        "Free pickup & delivery"
      ]
    },
    {
      id: 3,
      name: "Paket Platinum",
      price: "Rp 4.000.000",
      duration: "1 tahun",
      benefits: [
        "Unlimited semua service",
        "Prioritas servis",
        "Konsultasi gratis",
        "Diskon suku cadang 20%",
        "Free pickup & delivery",
        "Asuransi kerusakan gratis"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Service Motor Honda</h1>
          <p className="text-xl">Perawatan profesional untuk motor Anda di AHASS resmi</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 border-b border-gray-300 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 font-semibold text-lg transition border-b-4 ${
              activeTab === 'services'
                ? 'text-red-600 border-red-600'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            Daftar Service
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-6 py-3 font-semibold text-lg transition border-b-4 ${
              activeTab === 'packages'
                ? 'text-red-600 border-red-600'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            Paket Service
          </button>
        </div>

        {/* ===== DAFTAR SERVICE ===== */}
        {activeTab === 'services' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Layanan Service Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="bg-red-600 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <p className="text-red-100 text-sm">{service.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Durasi</p>
                      <p className="text-lg font-semibold text-gray-800">⏱️ {service.duration}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Harga</p>
                      <p className="text-2xl font-bold text-red-600">{service.price}</p>
                    </div>
                    <div className="mb-6 border-t pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Termasuk:</p>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-red-600 mt-1">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== PAKET SERVICE ===== */}
        {activeTab === 'packages' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Paket Service Tahunan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicePackages.map((pkg, idx) => (
                <div 
                  key={pkg.id} 
                  className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition ${
                    idx === 1 ? 'ring-2 ring-red-600 lg:scale-105' : ''
                  }`}
                >
                  {idx === 1 && (
                    <div className="bg-red-600 text-white text-center py-2">
                      <p className="font-bold">Rekomendasi Terbaik ⭐</p>
                    </div>
                  )}
                  <div className={`p-8 ${idx === 1 ? 'bg-red-50' : 'bg-white'}`}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-sm text-gray-600 mb-6">{pkg.duration}</p>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-2">Harga</p>
                      <p className="text-4xl font-bold text-red-600">{pkg.price}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-6 mb-6">
                      <p className="font-semibold text-gray-800 mb-4">Keuntungan:</p>
                      <ul className="space-y-3">
                        {pkg.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-red-600 font-bold">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className={`w-full py-3 px-4 rounded-lg font-bold transition ${
                      idx === 1
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}>
                      Pilih Paket
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mengapa Pilih AHASS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Teknisi Bersertifikat</h4>
              <p className="text-gray-600">Teknisi profesional terlatih dan bersertifikat resmi Honda</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚙️</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Suku Cadang Original</h4>
              <p className="text-gray-600">Menggunakan suku cadang original Honda berkualitas tinggi</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Servis Cepat</h4>
              <p className="text-gray-600">Proses servis yang efisien dan tepat waktu</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💯</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Garansi Kerja</h4>
              <p className="text-gray-600">Garansi untuk semua pekerjaan servis kami</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}