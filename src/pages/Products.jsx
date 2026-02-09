import React, { useState } from 'react';
import MotorCard from "../components/MotorCard";

const motorsData = [
  {
    id: 1,
    name: "Honda PCX 160",
    category: "matic",
    price: "Rp 32.000.000",
    image: "/images/pcx.jpg",
  },
  {
    id: 2,
    name: "Honda Vario 160",
    category: "matic",
    price: "Rp 26.000.000",
    image: "/images/vario.jpg",
  },
  {
    id: 3,
    name: "Honda CBR 150R",
    category: "sport",
    price: "Rp 38.000.000",
    image: "/images/cbr.jpg",
  },
  {
    id: 4,
    name: "Honda Beat Coklat",
    category: "matic",
    price: "Rp 18.500.000",
    image: "/images/beat.jpg",
  },
  {
    id: 5,
    name: "Honda Revo",
    category: "cub",
    price: "Rp 18.000.000",
    image: "/images/revo.jpg",
  },
  {
    id: 6,
    name: "Honda e:Ny1",
    category: "ev",
    price: "Rp 500.000.000",
    image: "/images/ev.jpg",
  },
  {
    id: 7,
    name: "Honda e:Advance",
    category: "ev",
    price: "Rp 350.000.000",
    image: "/images/e.jpg",
  },
  {
    id: 8,
    name: "Honda Beat Hijau Tua",
    category: "matic",
    price: "Rp 19.000.000",
    image: "/images/beatijo.jpg",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMotors =
    selectedCategory === "all"
      ? motorsData
      : motorsData.filter(
          (motor) => motor.category === selectedCategory
        );

  const categories = [
    { value: 'all', label: 'Semua Motor' },
    { value: 'matic', label: 'Matic' },
    { value: 'sport', label: 'Sport' },
    { value: 'cub', label: 'Cub' },
    { value: 'ev', label: 'Electric' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Produk Honda</h1>
          <p className="text-xl">Temukan motor impian Anda dengan berbagai pilihan dan harga terjangkau</p>
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
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMotors.map((motor) => (
            <MotorCard key={motor.id} motor={motor} />
          ))}
        </div>

        {/* Empty State */}
        {filteredMotors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Tidak ada motor untuk kategori ini</p>
          </div>
        )}
      </div>
    </div>
  );
}