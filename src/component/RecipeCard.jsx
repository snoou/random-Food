function RecipeCard({meal}) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <img
          src={meal.thumb}
          alt={meal.name}
          className="w-full h-64 object-cover"/>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{meal.name}</h2>
          <div className="flex gap-2 mb-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
              {meal.category}
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {meal.area}
            </span>
            {meal.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
