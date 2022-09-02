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
      {props.hasButton && <Button buttonText={props.buttonText} />}
    </div>
  );
}

export default IntroCard;
