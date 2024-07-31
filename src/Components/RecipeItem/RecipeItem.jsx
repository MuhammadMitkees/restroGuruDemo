import React from "react";
import styles from "./RecipeItem.module.css";

const RecipeItem = ({ recipe, onSelect, isSelected }) => {
  return (
    <li
      className={`${styles.listItem} ${isSelected ? styles.selected : ""}`}
      onClick={() => onSelect(recipe)}
    >
      {recipe.title}
    </li>
  );
};

export default RecipeItem;
