import classes from "./DesktopMenu.module.css";
import { Link } from "react-router-dom";

function DesktopMenu() {
  return (
    <div className={classes.menu}>
      <Link to="/home">
        <p>HOME</p>
      </Link>
      <Link to="/about">
        <p>ABOUT US</p>
      </Link>
      <Link to="/subscribe">
        <p>CREATE YOUR PLAN</p>
      </Link>
    </div>
  );
}

export default DesktopMenu;
