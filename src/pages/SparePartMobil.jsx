import React, { useState } from 'react';

export default function SparePartMobil() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const spareParts = [
    {
      id: 1,
      name: "Oli Mesin Mobil 5L",
      category: "oli",
      price: "Rp 250.000",
      image: "🛢️"
    },
    {
      id: 2,
      name: "Filter Udara Mobil",
      category: "filter",
      price: "Rp 180.000",
      image: "🔄"
    },
    {
      id: 3,
      name: "Filter Kabin",
      category: "filter",
      price: "Rp 200.000",
      image: "🔄"
    },
    {
      id: 4,
      name: "Ban Mobil 185/65 R15",
      category: "tire",
      price: "Rp 1.200.000",
      image: "🛞"
    },
    {
      id: 5,
      name: "Aki Mobil 60Ah",
      category: "battery",
      price: "Rp 1.500.000",
      image: "🔋"
    },
    {
      id: 6,
      name: "Kampas Rem Mobil",
      category: "brake",
      price: "Rp 800.000",
      image: "🛑"
    }
  ];

  const filteredParts = selectedCategory === 'all'
    ? spareParts
    : spareParts.filter(part => part.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'Semua' },
    { value: 'oli', label: 'Oli' },
    { value: 'filter', label: 'Filter' },
    { value: 'tire', label: 'Ban' },
    { value: 'battery', label: 'Aki' },
    { value: 'brake', label: 'Rem' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">🚗 Suku Cadang Mobil Honda Original</h1>
          <p className="text-xl">Suku cadang original berkualitas untuk mobil Honda Anda</p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === cat.value
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredParts.map((part) => (
            <div key={part.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-40 flex items-center justify-center">
                <div className="text-6xl">{part.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{part.name}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">{part.price}</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                  Pesan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}