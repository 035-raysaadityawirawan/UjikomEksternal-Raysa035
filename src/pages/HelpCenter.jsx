import React, { useState } from 'react';

export default function HelpCenter() {
  const [activeTab, setActiveTab] = useState('faq');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Bagaimana cara mengajukan kredit motor?",
      answer: "Anda dapat mengajukan kredit motor melalui navbar dengan klik tombol 'Credit Simulation'. Isi data diri, pilih motor, dan dealer tujuan. Tim kami akan menghubungi Anda segera."
    },
    {
      id: 2,
      question: "Berapa lama proses persetujuan kredit?",
      answer: "Proses persetujuan kredit biasanya memakan waktu 1-3 hari kerja setelah Anda mengirimkan formulir lengkap dengan dokumen pendukung."
    },
    {
      id: 3,
      question: "Apa saja dokumen yang diperlukan untuk kredit?",
      answer: "Dokumen yang diperlukan: KTP, NPWP, Slip gaji, Laporan keuangan (untuk yang self-employed), Fotokopi rekening koran 3 bulan terakhir, dan Surat keterangan kerja."
    },
    {
      id: 4,
      question: "Apakah ada biaya admin atau biaya tersembunyi?",
      answer: "Semua biaya sudah tertera jelas di awal kontrak. Tidak ada biaya tersembunyi. Biaya admin dan asuransi sudah termasuk dalam cicilan yang ditawarkan."
    },
    {
      id: 5,
      question: "Bagaimana cara booking service motor?",
      answer: "Klik tombol 'Booking Service' di navbar, isi data pribadi Anda, pilih tipe service, tanggal, waktu, dan lokasi dealer. Kami akan konfirmasi booking Anda via WhatsApp atau telepon."
    },
    {
      id: 6,
      question: "Berapa harga service motor Honda?",
      answer: "Harga service tergantung jenis service. General Service mulai dari Rp 250.000, Besar Service mulai dari Rp 1.000.000. Hubungi dealer terdekat untuk detail lebih lanjut."
    },
    {
      id: 7,
      question: "Apakah ada garansi untuk motor baru?",
      answer: "Ya, semua motor Honda baru mendapatkan garansi resmi selama 2 tahun atau 30.000 km, mana yang tercapai lebih dulu. Garansi berlaku untuk kerusakan manufaktur."
    },
    {
      id: 8,
      question: "Bagaimana cara trade-in motor lama?",
      answer: "Bawa motor lama Anda ke dealer AHASS terdekat. Tim kami akan melakukan inspeksi dan memberikan penawaran harga terbaik untuk ditukar dengan motor baru."
    }
  ];

  const contactChannels = [
    {
      id: 1,
      title: "WhatsApp",
      icon: "💬",
      contact: "+62 812-3456-7890",
      info: "Hubungi kami via WhatsApp untuk pertanyaan cepat",
      link: "https://wa.me/6281234567890"
    },
    {
      id: 2,
      title: "Telepon",
      icon: "☎️",
      contact: "(021) 1234-5678",
      info: "Layanan pelanggan tersedia 08:00 - 17:00 WIB",
      link: "tel:+621234567890"
    },
    {
      id: 3,
      title: "Email",
      icon: "📧",
      contact: "support@astra-honda.com",
      info: "Kirim pertanyaan Anda dan kami akan merespon dalam 24 jam",
      link: "mailto:support@astra-honda.com"
    },
    {
      id: 4,
      title: "Live Chat",
      icon: "💻",
      contact: "Chat Now",
      info: "Berbicara langsung dengan customer service kami",
      link: "#"
    }
  ];

  const troubleshoots = [
    {
      id: 1,
      title: "Motor Tidak Mau Starter",
      steps: [
        "Periksa koneksi aki apakah sudah kuat",
        "Pastikan bensin masih tersedia",
        "Cek busi apakah masih berfungsi",
        "Jika masih bermasalah, bawa ke dealer terdekat"
      ]
    },
    {
      id: 2,
      title: "Mesin Overheat/Panas Berlebih",
      steps: [
        "Matikan mesin dan biarkan mendingin",
        "Periksa kadar cairan pendingin",
        "Pastikan filter udara dalam kondisi bersih",
        "Kunjungi service jika masalah berlanjut"
      ]
    },
    {
      id: 3,
      title: "Suara Mesin Tidak Normal",
      steps: [
        "Dengarkan jenis suara yang dihasilkan",
        "Periksa tingkat oli mesin",
        "Cek busi dan filter",
        "Segera bawa ke service resmi"
      ]
    },
    {
      id: 4,
      title: "Rem Tidak Responsif",
      steps: [
        "Periksa cairan rem apakah sudah berkurang",
        "Cek kondisi kampas rem",
        "Jangan paksa mengerem dengan keras",
        "Segera bawa ke dealer untuk pemeriksaan"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl">Kami siap membantu Anda dengan berbagai pertanyaan dan masalah</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 border-b border-gray-300 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-3 font-semibold text-lg transition border-b-4 ${
              activeTab === 'faq'
                ? 'text-red-600 border-red-600'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-3 font-semibold text-lg transition border-b-4 ${
              activeTab === 'contact'
                ? 'text-red-600 border-red-600'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            Hubungi Kami
          </button>
          <button
            onClick={() => setActiveTab('troubleshoot')}
            className={`px-6 py-3 font-semibold text-lg transition border-b-4 ${
              activeTab === 'troubleshoot'
                ? 'text-red-600 border-red-600'
                : 'text-gray-600 border-transparent hover:text-gray-800'
            }`}
          >
            Troubleshooting
          </button>
        </div>

        {/* ===== FAQ TAB ===== */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Pertanyaan yang Sering Diajukan</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    <span className="text-lg font-semibold text-gray-800 text-left">{faq.question}</span>
                    <span className={`text-2xl transition ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== CONTACT TAB ===== */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Hubungi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactChannels.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.link}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
                >
                  <div className="text-5xl mb-4">{channel.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{channel.title}</h3>
                  <p className="text-red-600 font-semibold text-lg mb-2">{channel.contact}</p>
                  <p className="text-gray-600">{channel.info}</p>
                </a>
              ))}
            </div>

            {/* Dealer Locations */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📍 Lokasi Dealer Terdekat</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "AHASS Jakarta Selatan", address: "Jl. Sudirman No. 123, Jakarta Selatan" },
                  { name: "AHASS Jakarta Timur", address: "Jl. Raya Bekasi No. 456, Jakarta Timur" },
                  { name: "AHASS Tangerang", address: "Jl. Ahmad Yani No. 789, Tangerang" },
                  { name: "AHASS Depok", address: "Jl. Margonda No. 321, Depok" }
                ].map((dealer, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">{dealer.name}</h4>
                    <p className="text-gray-600 text-sm">{dealer.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== TROUBLESHOOTING TAB ===== */}
        {activeTab === 'troubleshoot' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Panduan Troubleshooting</h2>
            <div className="space-y-6">
              {troubleshoots.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">⚙️ {item.title}</h3>
                  <ol className="space-y-3">
                    {item.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mt-8">
              <p className="text-blue-800">
                💡 <strong>Catatan:</strong> Jika masalah tidak teratasi setelah mengikuti panduan di atas, segera kunjungi dealer resmi Honda terdekat untuk pemeriksaan lebih lanjut.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}