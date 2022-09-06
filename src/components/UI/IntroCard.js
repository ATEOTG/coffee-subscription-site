import { useNavigate } from "react-router-dom";
import Button from "./Button";
import classes from "./IntroCard.module.css";
function IntroCard(props) {
  const navigate = useNavigate();

  const classNameDiv = `${classes["intro-card--cont"]} ${
    props.background
  } ${"margin-btm"} ${"border-radius"}`;

  return (
    <div className={classNameDiv}>
      <h1> {props.header}</h1>
      <p> {props.paragraph}</p>

      {props.hasButton && (
        <div>
          <Button
            onClick={() => navigate("/subscribe")}
            buttonText={props.buttonText}
          />
        </div>
      )}
    </div>
  );
}

export default IntroCard;
