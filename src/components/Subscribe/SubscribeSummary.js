import { useSelector } from "react-redux";
import classes from "./SubscribeSummary.module.css";
import Button from "../UI/Button";

function SubscribeSummary(props) {
  const drink = useSelector((state) => state.drink);
  const type = useSelector((state) => state.type);
  const much = useSelector((state) => state.much);
  const grind = useSelector((state) => state.grind);
  const often = useSelector((state) => state.often);

  return (
    <div className={classes["summary-cont"]}>
      <div
        className={`${classes["order-cont"]} ${"center"} ${"border-radius"}`}
      >
        <p className={classes["title"]}>ORDER SUMMARY</p>
        <h2>
          “I drink my coffee{" "}
          {drink === "Filter" || drink === "Espresso" ? "as" : "using"}{" "}
          <span className={classes.custom}>
            {drink}
            {drink === "Capsule" ? "s" : ""}
          </span>
          , with a <span className={classes.custom}>{type}</span> type of bean.{" "}
          <span className={classes.custom}>{much}</span>{" "}
          {drink === "Capsule" ? (
            ""
          ) : (
            <span>
              ground ala <span className={classes.custom}>{grind}</span>,{" "}
            </span>
          )}{" "}
          sent to me <span className={classes.custom}>{often}</span>.”
        </h2>
      </div>
      <div onClick={props.onClick}>
        <Button buttonText="Create my plan!" />
      </div>
    </div>
  );
}

export default SubscribeSummary;
