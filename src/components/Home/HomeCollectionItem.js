import classes from "./HomeCollectionItem.module.css";

function HomeCollectionItem(props) {
  return (
    <div className={classes["collection-item"]}>
      <img src={props.image} alt={`${props.title} bag`} />
      <div className={classes["collection-item--cont"]}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default HomeCollectionItem;
