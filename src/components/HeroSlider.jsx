import { useEffect, useState } from "react";

const slides = [
  {
    subtitle: "Versi Terbaru!",
    image: "/images/banner.png",
  },
  {
    title: "Honda PCX 160",
    subtitle: "Nyaman & Elegan",
    image: "/images/pcx.jpg",
  },
  {
    title: "Honda e:Ny1",
    subtitle: "Go green & Stylish",
    image: "/images/ev.jpg",
  },
  {
    title: "Honda Beat",
    subtitle: "Irit & Stylish",
    image: "/images/beat.jpg",
  },
  {
    title: "Honda Vario 160",
    subtitle: "Sporty & Kencang",
    image: "/images/vario.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image} 
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 text-white">
            <h1 className="text-5xl font-bold">{slide.title}</h1>
            <p className="text-xl mt-3">{slide.subtitle}</p>
            <button className="mt-5 bg-red-600 px-6 py-3 w-fit rounded hover:bg-red-700">
              Lihat Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}