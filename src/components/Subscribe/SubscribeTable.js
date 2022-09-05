import classes from "./SubscribeTable.module.css";
import { useSelector } from "react-redux";

function SubscribeTable() {
  const drink = useSelector((state) => state.drink);

  return (
    <div className={classes["table-cont"]}>
      <div className={classes["table-item"]}>
        <h2 className={classes["table-number"]} style={{ color: "#0e8784" }}>
          01
        </h2>
        <h2 className={classes["table-text"]}>Preferences</h2>
      </div>
      <div className={classes["table-item"]}>
        <h2 className={classes["table-number"]}>02</h2>
        <h2 className={classes["table-text"]}>Bean Type</h2>
      </div>
      <div className={classes["table-item"]}>
        <h2 className={classes["table-number"]}>03</h2>
        <h2 className={classes["table-text"]}>Quantity</h2>
      </div>
      <div className={classes["table-item"]}>
        <h2
          className={classes["table-number"]}
          style={{ opacity: `${drink === "Capsule" ? "0.3" : "0.8"}` }}
        >
          04
        </h2>
        <h2
          className={classes["table-text"]}
          style={{ opacity: `${drink === "Capsule" ? "0.3" : "1"}` }}
        >
          Grind Option
        </h2>
      </div>
      <div className={classes["table-item"]}>
        <h2 className={classes["table-number"]}>05</h2>
        <h2 className={classes["table-text"]}>Deliveries</h2>
      </div>
    </div>
  );
}

export default SubscribeTable;
