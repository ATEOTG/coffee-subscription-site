import classes from "./HomeCollection.module.css";
import HomeCollectionItem from "./HomeCollectionItem";
import granEspresso from "../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import piccollo from "../../assets/home/desktop/image-piccollo.png";
import danche from "../../assets/home/desktop/image-danche.png";

function HomeCollection() {
  return (
    <div className={`${classes["collection-cont"]} ${"margin-btm"}`}>
      <h1>our collection</h1>
      <div className={classes["collection-item--cont"]}>
        <HomeCollectionItem
          image={granEspresso}
          title={"Gran Espresso"}
          description={
            "Light and flavorful blend with cocoa and black pepper for an intense experience"
          }
        />
        <HomeCollectionItem
          image={planalto}
          title={"Planalto"}
          description={
            "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
          }
        />
        <HomeCollectionItem
          image={piccollo}
          title={"Piccollo"}
          description={
            "Mild and smooth blend featuring notes of toasted almond and dried cherry"
          }
        />
        <HomeCollectionItem
          image={danche}
          title={"Danche"}
          description={
            "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
          }
        />
      </div>
    </div>
  );
}

export default HomeCollection;
