import classes from "./HomeFeatureItem.module.css";

function HomeFeatureItem(props) {
  return (
    <div className={`${classes["feature-item"]} ${"border-radius"}`}>
      <img src={props.image} alt={props.alt} />
      <div className={classes["feature-text--cont"]}>
        <h2>{props.header}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default HomeFeatureItem;
