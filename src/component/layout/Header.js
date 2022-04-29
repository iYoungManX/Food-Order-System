import { Fragment } from "react";
import mealsImage from "../../assest/res.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>iYoung Man's Restaurant</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Good One" />
      </div>
    </Fragment>
  );
};

export default Header;
