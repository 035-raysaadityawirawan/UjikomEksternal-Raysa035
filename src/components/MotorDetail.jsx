import { useParams } from "react-router-dom";

const motors = [
  {
    id: 1,
    name: "Honda PCX 160",
    price: "Rp 32.000.000",
    category: "matic",
    image: "/images/pcx.jpg",
    description: "Skutik premium dengan desain elegan dan mesin 160cc.",
  },
  {
    id: 2,
    name: "Honda Vario 160",
    price: "Rp 26.000.000",
    category: "matic",
    image: "/images/vario.jpg",
    description: "Motor matic sporty dan irit bahan bakar.",
  },
  {
    id: 3,
    name: "Honda Cbr 150",
    price: "Rp 26.000.000",
    category: "sport",
    image: "/images/cbr.jpg",
    description: "Motor sport irit bahan bakar dan ringan.",
  },
  {
    id: 4,
    name: "Honda e:Ny1:",
    price: "Rp 500.000.000",
    category: "ev",
    image: "/images/ev.jpg",
    description: "Motor sport irit bahan bakar dan ringan.",
  },
];

const MotorDetail = () => {
  const { id } = useParams();
  const motor = motors.find((m) => m.id === parseInt(id));

  if (!motor) return <p className="p-6">STOK MOTOR/MOBIL KOSONG!</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={motor.image}
        alt={motor.name}
        className="w-full h-80 object-contain"
      />

      <h1 className="text-3xl font-bold mt-4">{motor.name}</h1>
      <p className="text-red-600 text-xl mt-2">{motor.price}</p>
      <p className="mt-4 text-gray-600">{motor.description}</p>

      <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded">
        Ajukan Kredit
      </button>
      
    </div>
  );
};

export default MotorDetail;