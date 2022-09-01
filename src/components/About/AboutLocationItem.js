import classes from "./AboutLocationItem.module.css";

function AboutLocationItem(props) {
  return (
    <div className={classes["about-item--cont"]}>
      {props.icon}
      <div className={classes["about-item-text--cont"]}>
        <h2>{props.header}</h2>
        <div className={classes["item-list"]}>
          <p>{props.street}</p>
          <p>{props.city}</p>
          <p>{props.postal}</p>
          <p>{props.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutLocationItem;
