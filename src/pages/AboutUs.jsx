import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl">Astra Honda Motor - Mitra Terpercaya Anda dalam Dunia Otomotif</p>
        </div>
      </div>

      {/* Company History */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah Perusahaan</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Astra Honda Motor (AHM) adalah perusahaan otomotif terkemuka di Indonesia yang merupakan hasil kerjasama antara PT Astra International Tbk dan Honda Motor Co., Ltd dari Jepang.
            </p>
            <p>
              Sejak didirikan pada tahun 1971, Astra Honda Motor telah menjadi pemimpin pasar dalam industri otomotif dua dan empat roda di Indonesia dengan komitmen untuk memberikan produk berkualitas tinggi dan layanan terbaik kepada pelanggan setia kami.
            </p>
            <p>
              Dengan jaringan distribusi terluas dan pusat layanan aftermarket AHASS yang tersebar di seluruh Indonesia, kami selalu siap melayani kebutuhan Anda dengan profesional dan terpercaya.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">🎯 Visi Kami</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi perusahaan otomotif terdepan yang memberikan nilai terbaik kepada pelanggan, karyawan, mitra bisnis, dan masyarakat Indonesia melalui inovasi berkelanjutan dan dedikasi penuh terhadap keunggulan.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">💼 Misi Kami</h3>
            <p className="text-gray-700 leading-relaxed">
              Menyediakan produk dan layanan otomotif berkualitas tinggi yang memenuhi kebutuhan pelanggan, meningkatkan kepuasan pelanggan, mendukung pertumbuhan ekonomi, dan berkontribusi positif bagi masyarakat dan lingkungan.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nilai-Nilai Inti Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl mb-3">👥</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Integritas</h4>
              <p className="text-gray-600 text-sm">Bertindak jujur dan transparan dalam setiap keputusan bisnis</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Keunggulan</h4>
              <p className="text-gray-600 text-sm">Berkomitmen untuk memberikan yang terbaik dalam setiap aspek</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Kemitraan</h4>
              <p className="text-gray-600 text-sm">Membangun hubungan jangka panjang dengan semua stakeholder</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-4xl mb-3">🌱</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Keberlanjutan</h4>
              <p className="text-gray-600 text-sm">Peduli terhadap lingkungan dan komunitas sekitar</p>
            </div>
          </div>
        </div>

        {/* Key Facts */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fakta Tentang Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">50+</div>
              <p className="text-gray-700 font-semibold">Tahun Pengalaman</p>
              <p className="text-gray-600 text-sm">Melayani pasar otomotif Indonesia</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Dealer Resmi</p>
              <p className="text-gray-600 text-sm">Tersebar di seluruh Indonesia</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">1000+</div>
              <p className="text-gray-700 font-semibold">AHASS</p>
              <p className="text-gray-600 text-sm">Pusat layanan aftermarket</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">5M+</div>
              <p className="text-gray-700 font-semibold">Pelanggan</p>
              <p className="text-gray-600 text-sm">Kepercayaan pelanggan setia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}