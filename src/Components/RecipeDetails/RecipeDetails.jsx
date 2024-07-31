// src/components/RecipeDetail/RecipeDetail.js
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
      <div className={styles.meta}>
        <p className={styles.author}>
          <strong>By:</strong> {recipe.author}
        </p>
        <p className={styles.category}>
          <strong>Category:</strong> {recipe.category}
        </p>
      </div>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />
      <div className={styles.section}>
        <h3>Ingredients:</h3>
        <ul className={styles.ingredients}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Preparation:</h3>
        <p className={styles.preparation}>{recipe.preparation}</p>
      </div>
      <div className={styles.infoSection}>
        <div
          className={`${styles.info} ${
            recipe.suitableForDiet ? styles.yes : styles.no
          }`}
        >
          <strong>Suitable for Diet:</strong>{" "}
          {recipe.suitableForDiet ? "Yes" : "No"}
        </div>
        <div
          className={`${styles.info} ${
            recipe.vegetarian ? styles.yes : styles.no
          }`}
        >
          <strong>Vegetarian:</strong> {recipe.vegetarian ? "Yes" : "No"}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
