import React from 'react';

export default function ServiceMobil() {
  const services = [
    {
      id: 1,
      name: "General Service",
      price: "Rp 750.000",
      duration: "1-2 jam",
      description: "Perawatan rutin mobil standar"
    },
    {
      id: 2,
      name: "Besar Service",
      price: "Rp 2.500.000",
      duration: "3-4 jam",
      description: "Perawatan menyeluruh dengan penggantian komponen"
    },
    {
      id: 3,
      name: "AC Service",
      price: "Rp 500.000",
      duration: "1 jam",
      description: "Pembersihan dan isi ulang pendingin AC"
    },
    {
      id: 4,
      name: "Ganti Ban",
      price: "Rp 1.000.000 - 3.000.000",
      duration: "1-2 jam",
      description: "Penggantian ban dengan produk original"
    },
    {
      id: 5,
      name: "Servis Rem",
      price: "Rp 800.000",
      duration: "2 jam",
      description: "Perawatan sistem pengereman mobil"
    },
    {
      id: 6,
      name: "Servis Suspensi",
      price: "Rp 1.500.000",
      duration: "2-3 jam",
      description: "Pemeriksaan dan perbaikan suspensi"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">🚗 Service Mobil Honda</h1>
          <p className="text-xl">Perawatan profesional untuk mobil Anda di AHASS resmi</p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Layanan Service Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-green-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-green-100 text-sm">{service.description}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Durasi</p>
                  <p className="text-lg font-semibold text-gray-800">⏱️ {service.duration}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-1">Harga</p>
                  <p className="text-2xl font-bold text-green-600">{service.price}</p>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Mengapa Pilih AHASS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}