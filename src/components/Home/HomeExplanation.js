import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import ExplanationCard from "../UI/ExplanationCard";
import classes from "./HomeExplanation.module.css";

function HomeExplanation() {
  const navigate = useNavigate();
  return (
    <div className={`${classes["home-explanation--cont"]}  ${"margin-btm"}`}>
      <h2>How it works</h2>
      <div className={classes["step-line--cont"]}>
        <div className={classes["circle-cont"]}>
          <div className={classes["circle"]}></div>
          <div className={classes["circle"]}></div>
          <div className={classes["circle"]}></div>
          <div className={classes["horizontal-line"]}></div>
        </div>
      </div>
      <ExplanationCard color={"#333d4b"} />
      <div>
        <Button
          onClick={() => navigate("/subscribe")}
          buttonText={"Create your plan"}
        />
      </div>
    </div>
  );
}

export default HomeExplanation;
