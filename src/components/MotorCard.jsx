import { useNavigate } from "react-router-dom";

const MotorCard = ({ motor }) => {
  console.log("MOTOR DATA:", motor);
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-4">
      <img
  src={motor.image}
  alt={motor.name}
  className="h-52 w-full object-contain bg-gray-100 rounded"
/>

      <h3 className="font-semibold mt-2">{motor.name}</h3>
      <p className="text-red-600">{motor.price}</p>

      <button
        onClick={() => navigate(`/motor/${motor.id}`)}
        className="mt-3 bg-red-600 text-white px-4 py-2 rounded"
      >
        Lihat Detail
      </button>
    </div>
    
  );
};

export default MotorCard;