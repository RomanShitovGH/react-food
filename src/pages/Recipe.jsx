import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();
  const {
    idMeal,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = recipe;

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={strMealThumb} alt={strMeal} />
          <h1>{strMeal}</h1>
          <h6>Категория: {strCategory}</h6>
          {strArea ? <h6>Происхождение: {strArea}</h6> : null}
          <p>{strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ингридиент</th>
                <th>Мера</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
              </tr>
            </tbody>
          </table>

          {strYoutube ? (
            <div className="row">
              <h5 style={{ margin: "2rem 0 1.5rem" }}>Видео рецепт</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
              />
            </div>
          ) : null}
        </div>
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Назад
      </button>
    </>
  );
}

export { Recipe };
