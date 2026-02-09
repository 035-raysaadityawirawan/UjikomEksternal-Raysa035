import React, { useState } from 'react';

export default function BookingServiceModal({ onClose }) {
  const [formData, setFormData] = useState({
    nama: '',
    noHp: '',
    motorType: 'Honda PCX 160',
    serviceType: 'General Service',
    tanggal: '',
    jam: '',
    dealer: 'AHASS Jakarta Selatan',
    catatan: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Booking Service</h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">✓ Berhasil!</h2>
            <p className="text-gray-700">Booking service Anda telah dikirim. Tim kami akan menghubungi Anda segera.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* DATA PRIBADI */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">👤 Data Pribadi</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">No HP</label>
                  <input
                    type="tel"
                    name="noHp"
                    value={formData.noHp}
                    onChange={handleChange}
                    required
                    placeholder="08xx xxxx xxxx"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
            </div>

            {/* INFORMASI SERVICE */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">🏍️ Informasi Service</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipe Motor</label>
                  <select
                    name="motorType"
                    value={formData.motorType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option>Honda PCX 160</option>
                    <option>Honda Scoopy</option>
                    <option>Honda Vario 160</option>
                    <option>Honda CB150R</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Jenis Service</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option>General Service</option>
                    <option>Besar Service</option>
                    <option>Tune Up</option>
                    <option>Perbaikan</option>
                    <option>Penggantian Suku Cadang</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tanggal</label>
                    <input
                      type="date"
                      name="tanggal"
                      value={formData.tanggal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Jam</label>
                    <input
                      type="time"
                      name="jam"
                      value={formData.jam}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* DEALER */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">🏪 Dealer Tujuan</h3>
              <select
                name="dealer"
                value={formData.dealer}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option>AHASS Jakarta Selatan</option>
                <option>AHASS Jakarta Timur</option>
                <option>AHASS Jakarta Utara</option>
                <option>AHASS Jakarta Pusat</option>
                <option>AHASS Tangerang</option>
                <option>AHASS Depok</option>
                <option>AHASS Tangerang Selatan</option>
                <option>AHASS Bogor</option>
              </select>
            </div>

            {/* CATATAN */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Catatan Tambahan</label>
              <textarea
                name="catatan"
                value={formData.catatan}
                onChange={handleChange}
                placeholder="Tulis catatan tambahan jika ada..."
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
              >
                Kirim Booking
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}