import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import FacebookIcon from "../svg/FacebookIcon";
import TwitterIcon from "../svg/TwitterIcon";
import InstagramIcon from "../svg/InstagramIcon";

function Footer() {
  return (
    <footer className={`${classes.footer} ${"center"} ${"margin-btm"}`}>
      <div className={classes["footer-logo"]}>
        <Logo />
      </div>
      <div className={classes["footer-links"]}>
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/subscribe">CREATE YOUR PLAN</Link>
      </div>
      <div className={classes["footer-icons"]}>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </footer>
  );
}

export default Footer;
