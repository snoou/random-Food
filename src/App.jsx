import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./component/Header";
import RecipeCard from "./component/RecipeCard";
import Ingredients from "./component/Ingredients";
import Instructions from "./component/Instructions";
import './style/main.css'


const API = "https://www.themealdb.com/api/json/v1/1/random.php";

function App() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get(API);
      const data = rename(res.data.meals[0]);
      setMeal(data);
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  }

  function rename(meal) {
    const { strMeal, strCategory, strArea, strMealThumb, strYoutube, strTags, strInstructions } = meal;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          ing: ingredient,
          measure: meal[`strMeasure${i}`],
        });
      }
    }

    const instructions = strInstructions
      ? strInstructions.split("\r\n").filter((line) => line.trim() !== "")
      : [];

    return {
      name: strMeal,
      category: strCategory,
      area: strArea,
      youtube: strYoutube,
      thumb: strMealThumb,
      instructions,
      ingredients,
      tags: strTags ? strTags.split(",") : [],
    };
  }

  return (
    <div className="bg-[#fff7ed] font-sans">
      <Header onReload={fetchData} />
      {meal && (
        <>
          <main className="max-w-6xl mx-auto p-4 grid lg:grid-cols-3 gap-6">
            <RecipeCard meal={meal} />
            <Ingredients meal={meal} />
          </main>
          <Instructions instructions={meal.instructions} />
        </>
      )}
    </div>
  );
}

export default App;
