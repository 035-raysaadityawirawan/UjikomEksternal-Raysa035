import React, { useState } from 'react';

export default function CreditSimulationModal({ onClose }) {
  const [mode, setMode] = useState('simulate'); // 'simulate' atau 'apply'
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(null);
  
  const [simulationData, setSimulationData] = useState({
    motorType: 'Honda PCX 160',
    price: '26000000',
    downPayment: '5200000',
    tenor: '12',
    interestRate: '0'
  });

  const [applyData, setApplyData] = useState({
    // DATA DIRI
    nama: '',
    noHp: '',
    alamat: '',
    // INFORMASI PEMBELIAN
    motorType: 'Honda PCX 160',
    tenor: '12',
    // DEALER TUJUAN
    dealer: 'AHASS Jakarta Selatan'
  });

  // SIMULASI KREDIT
  const handleSimulationChange = (e) => {
    const { name, value } = e.target;
    setSimulationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateCredit = (e) => {
    e.preventDefault();
    const principal = parseInt(simulationData.price) - parseInt(simulationData.downPayment);
    const monthlyRate = parseInt(simulationData.interestRate) / 100 / 12;
    const numPayments = parseInt(simulationData.tenor);
    
    let monthlyPayment;
    if (monthlyRate === 0) {
      monthlyPayment = principal / numPayments;
    } else {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    setResult({
      downPayment: parseInt(simulationData.downPayment),
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(monthlyPayment * numPayments),
      tenor: numPayments,
      motorType: simulationData.motorType
    });
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);
  };

  // AJUKAN KREDIT
  const handleApplyChange = (e) => {
    const { name, value } = e.target;
    setApplyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', applyData);
    alert('Pengajuan kredit Anda telah dikirim!');
    onClose();
  };

  const transisiKeAjukan = () => {
    setApplyData(prev => ({
      ...prev,
      motorType: result.motorType
    }));
    setMode('apply');
    setStep(1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {mode === 'simulate' ? '💰 Simulasi Kredit Motor' : '📋 Ajukan Kredit Motor'}
          </h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* ===== MODE SIMULASI ===== */}
        {mode === 'simulate' && (
          <>
            <form onSubmit={calculateCredit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tipe Motor */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipe Motor</label>
                  <select
                    name="motorType"
                    value={simulationData.motorType}
                    onChange={handleSimulationChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option>Honda PCX 160</option>
                    <option>Honda Scoopy</option>
                    <option>Honda Vario 160</option>
                    <option>Honda CB150R</option>
                    <option>Honda Revo</option>
                    <option>Honda Beat Cokelat</option>
                    <option>Honda Beat Hijau Tua</option>
                    <option>Honda e:Ny1</option>
                    <option>Honda e:Advance</option>      
                  </select>
                </div>

                {/* Harga Motor */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Harga Motor (Rp)</label>
                  <input
                    type="number"
                    name="price"
                    value={simulationData.price}
                    onChange={handleSimulationChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                {/* Uang Muka */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Uang Muka (Rp)</label>
                  <input
                    type="number"
                    name="downPayment"
                    value={simulationData.downPayment}
                    onChange={handleSimulationChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                {/* Tenor */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tenor (Bulan)</label>
                  <select
                    name="tenor"
                    value={simulationData.tenor}
                    onChange={handleSimulationChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="12">12 Bulan</option>
                    <option value="24">24 Bulan</option>
                    <option value="36">36 Bulan</option>
                    <option value="48">48 Bulan</option>
                    <option value="60">60 Bulan</option>
                  </select>
                </div>

                {/* Suku Bunga */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Suku Bunga (%)</label>
                  <input
                    type="number"
                    name="interestRate"
                    value={simulationData.interestRate}
                    onChange={handleSimulationChange}
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* Tombol Hitung */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Hitung Cicilan
              </button>
            </form>

            {/* Hasil Simulasi */}
            {result && (
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Hasil Simulasi</h2>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Uang Muka</p>
                    <p className="text-xl font-bold text-red-600">{formatCurrency(result.downPayment)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cicilan Per Bulan</p>
                    <p className="text-xl font-bold text-red-600">{formatCurrency(result.monthlyPayment)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tenor</p>
                    <p className="text-xl font-bold text-gray-800">{result.tenor} Bulan</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Pembayaran</p>
                    <p className="text-xl font-bold text-gray-800">{formatCurrency(result.totalPayment)}</p>
                  </div>
                </div>

                {/* Tombol Ajukan */}
                <button
                  onClick={transisiKeAjukan}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  ✓ Lanjut Ajukan Kredit
                </button>
              </div>
            )}
          </>
        )}

        {/* ===== MODE AJUKAN KREDIT ===== */}
        {mode === 'apply' && (
          <>
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= num ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`h-1 w-20 mx-2 ${
                      step > num ? 'bg-red-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: DATA DIRI */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">📋 Data Diri</h2>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="nama"
                      value={applyData.nama}
                      onChange={handleApplyChange}
                      placeholder="Masukkan nama lengkap"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">No HP</label>
                    <input
                      type="tel"
                      name="noHp"
                      value={applyData.noHp}
                      onChange={handleApplyChange}
                      placeholder="08xx xxxx xxxx"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Alamat</label>
                    <textarea
                      name="alamat"
                      value={applyData.alamat}
                      onChange={handleApplyChange}
                      placeholder="Masukkan alamat lengkap"
                      required
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 2: INFORMASI PEMBELIAN */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">🏍️ Informasi Pembelian</h2>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pilih Motor</label>
                    <select
                      name="motorType"
                      value={applyData.motorType}
                      onChange={handleApplyChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option>Honda PCX 160</option>
                      <option>Honda Scoopy</option>
                      <option>Honda Vario 160</option>
                      <option>Honda CB150R</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tenor Cicilan</label>
                    <select
                      name="tenor"
                      value={applyData.tenor}
                      onChange={handleApplyChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option value="12">12 Bulan</option>
                      <option value="24">24 Bulan</option>
                      <option value="36">36 Bulan</option>
                      <option value="48">48 Bulan</option>
                      <option value="60">60 Bulan</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: DEALER TUJUAN */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">🏪 Dealer Tujuan</h2>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pilih Dealer</label>
                    <select
                      name="dealer"
                      value={applyData.dealer}
                      onChange={handleApplyChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option>AHASS Jakarta Selatan</option>
                      <option>AHASS Jakarta Timur</option>
                      <option>AHASS Jakarta Utara</option>
                      <option>AHASS Jakarta Pusat</option>
                      <option>AHASS Tangerang</option>
                      <option>AHASS Depok</option>
                    </select>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      ✓ Data Anda telah diisi dengan lengkap. Silakan klik tombol "Kirim Pengajuan" untuk melanjutkan.
                    </p>
                  </div>
                </div>
              )}

              {/* Footer Buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="flex-1 px-4 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Kembali
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                  >
                    Lanjut
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                  >
                    Kirim Pengajuan
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}