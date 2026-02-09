import React from 'react';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">🌍 Keberlanjutan</h1>
          <p className="text-xl">Komitmen Astra Honda untuk Masa Depan yang Berkelanjutan</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Komitmen Keberlanjutan Kami</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Astra Honda Motor berkomitmen untuk menjalankan bisnis yang berkelanjutan dengan mempertimbangkan dampak lingkungan, sosial, dan ekonomi jangka panjang. Kami percaya bahwa kesuksesan bisnis harus sejalan dengan tanggung jawab terhadap planet dan masyarakat.
          </p>
        </div>

        {/* Environmental Initiatives */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">♻️ Inisiatif Lingkungan</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Emisi Nol</h3>
              <p className="text-gray-700">Pengembangan kendaraan listrik (EV) untuk mengurangi emisi karbon dan polusi udara di perkotaan.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Efisiensi Energi</h3>
              <p className="text-gray-700">Optimalisasi proses produksi untuk mengurangi konsumsi energi dan limbah produksi.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Program Daur Ulang</h3>
              <p className="text-gray-700">Program pengumpulan dan daur ulang suku cadang lama untuk mengurangi sampah logam dan plastik.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Penghijauan</h3>
              <p className="text-gray-700">Program penanaman pohon di berbagai lokasi sebagai bentuk komitmen terhadap penghijauan Indonesia.</p>
            </div>
          </div>
        </div>

        {/* Social Responsibility */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">❤️ Tanggung Jawab Sosial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Pendidikan</h4>
              <p className="text-gray-700">Program beasiswa dan pelatihan keterampilan untuk masyarakat kurang mampu</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-3">🏥</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Kesehatan</h4>
              <p className="text-gray-700">Klinik kesehatan gratis dan program vaksinasi untuk masyarakat</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Pemberdayaan UMKM</h4>
              <p className="text-gray-700">Dukungan terhadap pengembangan usaha kecil dan menengah lokal</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-3">🚨</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Bencana Alam</h4>
              <p className="text-gray-700">Program tanggap darurat dan bantuan untuk daerah yang terkena bencana</p>
            </div>
          </div>
        </div>

        {/* Sustainability Goals */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🎯 Target Keberlanjutan 2030</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-gray-800">Kurangi Emisi Karbon 50%</h4>
                <p className="text-gray-600">Mengurangi jejak karbon operasional hingga setengahnya melalui energi terbarukan</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-gray-800">Produk EV 30% dari Total Penjualan</h4>
                <p className="text-gray-600">Target penjualan kendaraan listrik mencapai 30% dari total produksi</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-gray-800">Nol Limbah ke Landfill</h4>
                <p className="text-gray-600">Mencapai target zero waste melalui program daur ulang menyeluruh</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-gray-800">Kesetaraan Gender 40% Manajemen</h4>
                <p className="text-gray-600">Meningkatkan representasi perempuan di posisi manajemen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}