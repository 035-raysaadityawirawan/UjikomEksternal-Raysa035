import React, { useState } from 'react';

export default function CekPromo() {
  const [selectedPromo, setSelectedPromo] = useState(null);

  const promos = [
    {
      id: 1,
      title: 'PCX 160 Promo Spesial',
      description: 'Dapatkan cicilan 0% untuk tenor 12 bulan',
      details: 'Penawaran terbatas untuk pembelian PCX 160 New Generation',
      motorType: 'Honda PCX 160',
      discount: '0% cicilan',
      validUntil: '2026-12-31'
    },
    {
      id: 2,
      title: 'Scoopy Hemat Bunga',
      description: 'Suku bunga mulai dari 2.99% per tahun',
      details: 'Promo khusus untuk pembeli Scoopy dengan cicilan hingga 60 bulan',
      motorType: 'Honda Scoopy',
      discount: 'Bunga dari 2.99%',
      validUntil: '2026-11-30'
    },
    {
      id: 3,
      title: 'Vario Cashback Besar',
      description: 'Cashback hingga 5 juta rupiah',
      details: 'Bonus cashback langsung untuk pembelian Vario tipe tertentu',
      motorType: 'Honda Vario 160',
      discount: 'Cashback 5 juta',
      validUntil: '2026-10-31'
    },
    {
      id: 4,
      title: 'CB150R Trade In Program',
      description: 'Trade in dengan harga terbaik untuk motor lawas Anda',
      details: 'Tukarkan motor lama Anda dengan harga yang sangat kompetitif',
      motorType: 'Honda CB150R',
      discount: 'Trade in terbaik',
      validUntil: '2026-12-31'
    },
    {
      id: 5,
      title: 'Asuransi Gratis',
      description: 'Gratis asuransi komprehensif selama 1 tahun',
      details: 'Perlindungan menyeluruh untuk motor impian Anda',
      motorType: 'Semua Tipe',
      discount: 'Asuransi gratis',
      validUntil: '2026-09-30'
    },
    {
      id: 6,
      title: 'Helm + Jaket Gratis',
      description: 'Dapatkan helm dan jaket premium gratis',
      details: 'Bonus accessories pilihan untuk setiap pembelian',
      motorType: 'Semua Tipe',
      discount: 'Helm + Jaket',
      validUntil: '2026-08-31'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Promo Honda Terbaru</h1>
          <p className="text-gray-600 text-lg">Temukan penawaran menarik dan hemat untuk pembelian motor Honda Anda</p>
        </div>

        {/* Grid Promo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedPromo(promo)}
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-red-100 text-sm">{promo.motorType}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">{promo.discount}</span>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPromo(promo);
                    }}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Promo */}
        {selectedPromo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-gray-800">{selectedPromo.title}</h2>
                <button
                  onClick={() => setSelectedPromo(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-6">
                <p className="text-lg font-semibold text-red-600 mb-2">{selectedPromo.discount}</p>
                <p className="text-gray-700">{selectedPromo.details}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Tipe Motor</p>
                  <p className="font-semibold text-gray-800">{selectedPromo.motorType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Berlaku Hingga</p>
                  <p className="font-semibold text-gray-800">{new Date(selectedPromo.validUntil).toLocaleDateString('id-ID')}</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-2">💡 Tips:</p>
                <p className="text-gray-700">Hubungi dealer terdekat untuk informasi lengkap dan syarat & ketentuan yang berlaku.</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedPromo(null)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition duration-300"
                >
                  Tutup
                </button>
                <button
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Hubungi Dealer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}