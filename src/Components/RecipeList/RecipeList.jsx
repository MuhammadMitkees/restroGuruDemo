import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import RecipeItem from "../RecipeItem/RecipeItem";
import styles from "./RecipeList.module.css";
import RecipeDetail from "../RecipeDetails/RecipeDetails";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Grid,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dietSwitch, setDietSwitch] = useState(false);
  const [vegetarianSwitch, setVegetarianSwitch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleDietSwitchChange = (event) => {
    setDietSwitch(event.target.checked);
  };

  const handleVegetarianSwitchChange = (event) => {
    setVegetarianSwitch(event.target.checked);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (selectedCategory === "All" || recipe.category === selectedCategory) &&
      (!dietSwitch || recipe.suitableForDiet) &&
      (!vegetarianSwitch || recipe.vegetarian) &&
      recipe.title.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recipe List</h2>
      <Grid container spacing={2} className={styles.filterContainer}>
        <Grid item xs={3}>
          <FormControl variant="outlined" fullWidth>
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
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            fullWidth
            label="Search"
            placeholder="Search by title"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Switch
                checked={dietSwitch}
                onChange={handleDietSwitchChange}
                name="dietSwitch"
                color="primary"
              />
            }
            label="Suitable for Diet"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Switch
                checked={vegetarianSwitch}
                onChange={handleVegetarianSwitchChange}
                name="vegetarianSwitch"
                color="primary"
              />
            }
            label="Vegetarian"
          />
        </Grid>
      </Grid>
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
