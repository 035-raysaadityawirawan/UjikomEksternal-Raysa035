import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT MENU */}
        <div>
          <img
            src="/images/honda.png"
            alt="Honda"
            className="w-32 mb-6"
          />

          <ul className="space-y-3 text-sm">
            {[
              "Corporate",
              "Global Honda",
              "Products",
              "After Sales",
              "Highlight",
              "Press Release",
              "Contact Us",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="bg-[#050505] p-6 rounded-lg">
          <h3 className="text-white text-lg font-semibold mb-3">
            Newsletter
          </h3>
          <p className="text-sm mb-4 leading-relaxed">
            Yuk jadi orang pertama yang mengetahui info produk dan promo
            terbaru sepeda motor Honda
          </p>

          <button
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-2 rounded-md text-sm font-semibold"
          >
            Subscribe
          </button>
        </div>

        {/* CONTACT */}
        <div className="text-sm">
          <div className="mb-4">
            <div className="bg-red-600 text-white px-4 py-2 rounded-md font-bold inline-block">
              Astra Honda Care<br />1-500-989
            </div>
          </div>

          <p className="leading-relaxed">
            PT Astra Honda Motor dan Mobil <br />
            Jl. Laksda Yos Sudarso – Sunter I <br />
            Jakarta 14350, Indonesia
          </p>

          <p className="mt-3">
            WhatsApp : 0811-9500-989 <br />
            Email : customercare@astra-honda.com
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Astra Honda Motor. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;