// src/components/RecipeItem.js
import React from "react";
import styles from "./RecipeItem.module.css";

const RecipeItem = ({ recipe, onSelect }) => {
  return (
    <li className={styles.listItem} onClick={() => onSelect(recipe)}>
      {recipe.title}
    </li>
  );
};

export default RecipeItem;
