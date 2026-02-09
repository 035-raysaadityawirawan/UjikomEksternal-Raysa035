import React, { useState } from 'react';

export default function SparePartMotor() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const spareParts = [
    {
      id: 1,
      name: "Oli Mesin Honda",
      category: "oli",
      price: "Rp 85.000",
      image: "/imges/MPX2.jpg",
      description: "Oli mesin sintetis premium untuk performa optimal"
    },
    {
      id: 2,
      name: "Filter Udara",
      category: "filter",
      price: "Rp 120.000",
      image: "🔄",
      description: "Filter udara original Honda untuk mesin yang sehat"
    },
    {
      id: 3,
      name: "Filter Oli",
      category: "filter",
      price: "Rp 95.000",
      image: "🔄",
      description: "Filter oli asli Honda dengan performa terpercaya"
    },
    {
      id: 4,
      name: "Busi Motor",
      category: "ignition",
      price: "Rp 150.000",
      image: "⚡",
      description: "Busi original Honda untuk ignition yang sempurna"
    },
    {
      id: 5,
      name: "Kampas Rem Depan",
      category: "brake",
      price: "Rp 280.000",
      image: "🛑",
      description: "Kampas rem berkualitas tinggi untuk keamanan maksimal"
    },
    {
      id: 6,
      name: "Kampas Rem Belakang",
      category: "brake",
      price: "Rp 250.000",
      image: "🛑",
      description: "Kampas rem belakang original dengan durabilitas terjamin"
    },
    {
      id: 7,
      name: "Ban Motor 100/80-17",
      category: "tire",
      price: "Rp 650.000",
      image: "🛞",
      description: "Ban berkualitas dengan grip dan durasi tahan lama"
    },
    {
      id: 8,
      name: "Ban Motor 80/90-14",
      category: "tire",
      price: "Rp 450.000",
      image: "🛞",
      description: "Ban ringan cocok untuk motor matic harian"
    },
    {
      id: 9,
      name: "Aki Motor 12V 9Ah",
      category: "battery",
      price: "Rp 850.000",
      image: "🔋",
      description: "Aki original Honda tahan lama dan bertenaga"
    },
    {
      id: 10,
      name: "Rantai Motor",
      category: "chain",
      price: "Rp 550.000",
      image: "⛓️",
      description: "Rantai premium dengan presisi tinggi"
    },
    {
      id: 11,
      name: "Gir Depan",
      category: "gear",
      price: "Rp 320.000",
      image: "⚙️",
      description: "Gir depan original untuk performa optimal"
    },
    {
      id: 12,
      name: "Gir Belakang",
      category: "gear",
      price: "Rp 480.000",
      image: "⚙️",
      description: "Gir belakang dengan ketahanan maksimal"
    }
  ];

  const filteredParts = selectedCategory === 'all'
    ? spareParts
    : spareParts.filter(part => part.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'Semua Suku Cadang' },
    { value: 'oli', label: 'Oli' },
    { value: 'filter', label: 'Filter' },
    { value: 'ignition', label: 'Ignition' },
    { value: 'brake', label: 'Rem' },
    { value: 'tire', label: 'Ban' },
    { value: 'battery', label: 'Aki' },
    { value: 'chain', label: 'Rantai' },
    { value: 'gear', label: 'Gir' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">🏍️ Suku Cadang Motor Honda Original</h1>
          <p className="text-xl">Suku cadang original berkualitas untuk motor Honda Anda</p>
        </div>
      </div>

      {/* Filter Category */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === cat.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Suku Cadang */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredParts.map((part) => (
            <div key={part.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-40 flex items-center justify-center">
                <div className="text-6xl">{part.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{part.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{part.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Harga</p>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{part.price}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Keunggulan Suku Cadang Original Honda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-bold text-gray-800 mb-2">Original & Bergaransi</h4>
              <p className="text-gray-600">100% original dengan garansi resmi Honda</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-bold text-gray-800 mb-2">Kualitas Terjamin</h4>
              <p className="text-gray-600">Kualitas premium untuk performa motor optimal</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-gray-800 mb-2">Harga Kompetitif</h4>
              <p className="text-gray-600">Harga terbaik untuk suku cadang original</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}