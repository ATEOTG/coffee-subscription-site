import { Link } from "react-router-dom";
import Button from "../UI/Button";
import ExplanationCard from "../UI/ExplanationCard";
import classes from "./HomeExplanation.module.css";

function HomeExplanation() {
  return (
    <div className={`${classes["home-explanation--cont"]}  ${"margin-btm"}`}>
      <h2>How it works</h2>
      <ExplanationCard color={"#333d4b"} />
      <Link to="/subscribe">
        <Button buttonText={"Create your plan"} />
      </Link>
    </div>
  );
}

export default HomeExplanation;
