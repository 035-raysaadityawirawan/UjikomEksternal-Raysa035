import React, { useState } from 'react';

export default function Karir() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      department: "teknologi",
      location: "Jakarta",
      type: "Full-time",
      salary: "Rp 10.000.000 - 15.000.000",
      description: "Kami mencari Software Engineer berpengalaman untuk mengembangkan platform digital kami"
    },
    {
      id: 2,
      title: "Sales Executive",
      department: "penjualan",
      location: "Seluruh Indonesia",
      type: "Full-time",
      salary: "Rp 8.000.000 - 12.000.000",
      description: "Bergabunglah dengan tim sales kami dan kembangkan karir Anda"
    },
    {
      id: 3,
      title: "Marketing Manager",
      department: "marketing",
      location: "Jakarta",
      type: "Full-time",
      salary: "Rp 12.000.000 - 18.000.000",
      description: "Memimpin strategi marketing dan mengembangkan brand awareness"
    },
    {
      id: 4,
      title: "Mekanik Ahli",
      department: "service",
      location: "Seluruh Indonesia",
      type: "Full-time",
      salary: "Rp 5.000.000 - 8.000.000",
      description: "Profesional service dengan sertifikat untuk melayani pelanggan kami"
    },
    {
      id: 5,
      title: "HR Manager",
      department: "hr",
      location: "Jakarta",
      type: "Full-time",
      salary: "Rp 10.000.000 - 14.000.000",
      description: "Mengelola strategi SDM dan pengembangan talenta perusahaan"
    },
    {
      id: 6,
      title: "Finance Analyst",
      department: "keuangan",
      location: "Jakarta",
      type: "Full-time",
      salary: "Rp 7.000.000 - 10.000.000",
      description: "Menganalisis data keuangan dan memberikan insights bisnis"
    }
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment);

  const departments = [
    { value: 'all', label: 'Semua Posisi' },
    { value: 'teknologi', label: 'Teknologi' },
    { value: 'penjualan', label: 'Penjualan' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'service', label: 'Service' },
    { value: 'hr', label: 'HR' },
    { value: 'keuangan', label: 'Keuangan' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">💼 Karir di Astra Honda</h1>
          <p className="text-xl">Bergabunglah dengan tim kami dan kembangkan potensi Anda</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Why Join Us */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mengapa Bergabung dengan Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-bold text-gray-800 mb-2">Karir Berkembang</h4>
              <p className="text-gray-600 text-sm">Kesempatan pengembangan karir dan promosi berdasarkan merit</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-gray-800 mb-2">Kompensasi Kompetitif</h4>
              <p className="text-gray-600 text-sm">Gaji kompetitif dan benefit menarik sesuai dengan posisi</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-bold text-gray-800 mb-2">Pelatihan & Pengembangan</h4>
              <p className="text-gray-600 text-sm">Program pelatihan berkelanjutan untuk peningkatan skill</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-800 mb-2">Tim Profesional</h4>
              <p className="text-gray-600 text-sm">Bekerja dengan tim yang berpengalaman dan suportif</p>
            </div>
          </div>
        </div>

        {/* Filter Department */}
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {departments.map((dept) => (
            <button
              key={dept.value}
              onClick={() => setSelectedDepartment(dept.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedDepartment === dept.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6 mb-12">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                    <div className="flex gap-3 mt-2 flex-wrap">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 pb-6 border-b">
                  <div>
                    <p className="text-sm text-gray-600">📍 Lokasi</p>
                    <p className="font-semibold text-gray-800">{job.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">💰 Gaji</p>
                    <p className="font-semibold text-gray-800">{job.salary}</p>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
                  Lamar Sekarang
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-xl text-gray-600">Tidak ada lowongan untuk departemen ini saat ini</p>
            </div>
          )}
        </div>

        {/* Why Astra Honda */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Budaya Perusahaan Kami</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🎯</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Fokus pada Hasil</h4>
                <p className="text-gray-600">Kami menghargai kerja keras dan hasil yang terukur dalam setiap project</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🌱</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Pertumbuhan Berkelanjutan</h4>
                <p className="text-gray-600">Investasi dalam pengembangan karyawan adalah prioritas utama kami</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🤝</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Kolaborasi Tim</h4>
                <p className="text-gray-600">Kami percaya pada kekuatan kerja sama dan saling mendukung</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Inovasi Berkelanjutan</h4>
                <p className="text-gray-600">Kami mendorong ide-ide baru dan kreativitas dari setiap anggota tim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}