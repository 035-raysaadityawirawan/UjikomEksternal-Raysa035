import React from 'react';

const CreditForm = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pengajuan Kredit Motor</h1>

      {/* DATA DIRI */}
      <section className="mb-8">
        <h2 className="font-semibold mb-4">Data Diri</h2>
        <input placeholder="Nama Lengkap" />
        <input placeholder="No HP" />
        <input placeholder="Alamat" />
      </section>

      {/* INFO PEMBELIAN */}
      <section className="mb-8">
        <h2 className="font-semibold mb-4">Informasi Pembelian</h2>
        <select>
          <option>Honda PCX 160</option>
        </select>
        <select>
          <option>Tenor 12 Bulan</option>
          <option>24 Bulan</option>
        </select>
      </section>

      {/* DEALER */}
      <section className="mb-8">
        <h2 className="font-semibold mb-4">Dealer Tujuan</h2>
        <select>
          <option>AHASS Jakarta Selatan</option>
        </select>
      </section>

      <button className="bg-red-600 text-white px-6 py-3 rounded">
        Kirim Pengajuan
      </button>
    </div>
  );
};

export default CreditForm;