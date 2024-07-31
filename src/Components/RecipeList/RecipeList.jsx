import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import RecipeItem from "../RecipeItem/RecipeItem";
import styles from "./RecipeList.module.css";
import RecipeDetail from "../RecipeDetails/RecipeDetails";
import { Select, MenuItem, InputLabel, FormControl, Box } from "@mui/material";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      selectedCategory === "All" || recipe.category === selectedCategory
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recipe List</h2>
      <div className={styles.filterContainer}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Italian">Italian</MenuItem>
            <MenuItem value="Mexican">Mexican</MenuItem>
            <MenuItem value="Chinese">Chinese</MenuItem>
            <MenuItem value="Indian">Indian</MenuItem>
            <MenuItem value="Mediterranean">Mediterranean</MenuItem>
            <MenuItem value="American">American</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Box className={styles.listContainer}>
        <ul className={styles.list}>
          {filteredRecipes.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              onSelect={handleSelectRecipe}
              isSelected={selectedRecipe && selectedRecipe.id === recipe.id}
            />
          ))}
        </ul>
        <RecipeDetail recipe={selectedRecipe} />
      </Box>
    </div>
  );
};

export default RecipeList;
