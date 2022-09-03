import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./IntroCard.module.css";
function IntroCard(props) {
  const classNameDiv = `${classes["intro-card--cont"]} ${
    props.background
  } ${"margin-btm"} ${"border-radius"}`;

  return (
    <div className={classNameDiv}>
      <h1> {props.header}</h1>
      <p> {props.paragraph}</p>

      {props.hasButton && (
        <Link to="/subscribe">
          <Button buttonText={props.buttonText} />
        </Link>
      )}
    </div>
  );
}

export default IntroCard;
