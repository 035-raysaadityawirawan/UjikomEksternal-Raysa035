
import MotorCard from "./MotorCard";

const motorsData = [
  {
    id: 1,
    name: "Honda PCX 160",
    category: "matic",
    price: "Rp 32.000.000",
    image: "/images/pcx.jpg",
  },
  {
    id: 2,
    name: "Honda Vario 160",
    category: "matic",
    price: "Rp 26.000.000",
    image: "/images/vario.jpg",
  },
  {
    id: 3,
    name: "Honda CBR 150R",
    category: "sport",
    price: "Rp 38.000.000",
    image: "/images/cbr.jpg",
  },
  {
    id: 4,
    name: "Honda Revo",
    category: "cub",
    price: "Rp 18.000.000",
    image: "/images/revo.jpg",
  },
  {
    id: 5,
    name: "Honda e:Ny1",
    category: "EV",
    price: "Rp 500.000.000",
    image: "/images/ev.jpg",
  },

];

const Motors = ({ selectedCategory }) => {
  const filteredMotors =
    selectedCategory === "all"
      ? motorsData
      : motorsData.filter(
          (motor) => motor.category === selectedCategory
        );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {filteredMotors.map((motor) => (
        <MotorCard key={motor.id} motor={motor} />
      ))}
    </div>
  );
};

export default Motors;