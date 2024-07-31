// src/screens/HomePage.js
import React from "react";
import Header from "../Components/Header/Header";
import RecipeList from "../Components/RecipeList/RecipeList";
import Footer from "../Components/Footer/Footer";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.mainContent}>
        <RecipeList />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
