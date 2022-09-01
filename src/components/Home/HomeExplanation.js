import Button from "../UI/Button";
import ExplanationCard from "../UI/ExplanationCard";
import classes from "./HomeExplanation.module.css";

function HomeExplanation() {
  return (
    <div
      className={`${
        classes["home-explanation--cont"]
      } ${"center"} ${"margin-btm"}`}
    >
      <h2>How it works</h2>
      <ExplanationCard color={"#333d4b"} />
      <Button buttonText={"Create your plan"} />
    </div>
  );
}

export default HomeExplanation;
