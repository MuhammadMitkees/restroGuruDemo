// src/components/RecipeDetail.js
import React from "react";
import styles from "./RecipeDetail.module.css";

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className={styles.placeholder}>
        Select a recipe to see the details
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <h2 className={styles.title}>{recipe.title}</h2>
      <p className={styles.author}>By: {recipe.author}</p>
      <p className={styles.category}>Category: {recipe.category}</p>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />
      <h3>Ingredients:</h3>
      <ul className={styles.ingredients}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Preparation:</h3>
      <p className={styles.preparation}>{recipe.preparation}</p>
      <p className={styles.info}>
        <strong>Rating:</strong> {recipe.rating} / 5
      </p>
      <p className={styles.info}>
        <strong>Suitable for Diet:</strong>{" "}
        {recipe.suitableForDiet ? "Yes" : "No"}
      </p>
      <p className={styles.info}>
        <strong>Vegetarian:</strong> {recipe.vegetarian ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default RecipeDetail;
