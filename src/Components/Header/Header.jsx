// src/components/Header/Header.js
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Recipe Book</h1>
    </header>
  );
};

export default Header;
