const Category = ({ setCategory }) => {
  const categories = ["all", "matic", "sport", "cub", "ev"];

  return (
    <div className="flex gap-4 justify-center my-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-red-600 hover:text-white"
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Category;