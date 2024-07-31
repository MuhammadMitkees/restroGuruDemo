// src/components/RecipeList.js
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const RecipeList = ({ onSelectRecipe }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesCollection = collection(db, "recipes");
        const recipeSnapshot = await getDocs(recipesCollection);
        const recipeList = recipeSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(recipeList);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
