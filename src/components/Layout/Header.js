import React from "react";

import HaederCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodOrder</h1>
        <HaederCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="foods" />
      </div>
    </React.Fragment>
  );
};

export default Header;
