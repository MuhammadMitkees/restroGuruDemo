import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import RecipeItem from "../RecipeItem/RecipeItem";
import styles from "./RecipeList.module.css";

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
    <div className={styles.container}>
      <h2 className={styles.title}>Recipe List</h2>
      <ul className={styles.list}>
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onSelect={onSelectRecipe}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
