function Ingredients({ meal }) {
  return (
    <div>
      <div className="bg-white rounded-xl shadow">
        <h3 className="text-xl font-bold p-4 bg-orange-500 text-white">
          Ingredients
        </h3>
        <ul className="space-y-2 px-4 text-gray-700">
          {meal.ingredients.map((ing, i) => (
            <li key={i} className="border-b border-stone-400 flex py-6 justify-between">
              <span>{ing.ing}</span>
              <span>{ing.measure}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href={meal.youtube} target="_blank" rel="noopener noreferrer">
        <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-b-lg hover:bg-red-700">
          Watch Video Tutorial
        </button>
      </a>
    </div>
  );
}

export default Ingredients;
