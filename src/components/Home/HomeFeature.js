import classes from "./HomeFeature.module.css";
import HomeFeatureItem from "./HomeFeatureItem";
import coffeeBeanIcon from "../../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../../assets/home/desktop/icon-gift.svg";
import truckIcon from "../../assets/home/desktop/icon-truck.svg";

function HomeFeature() {
  return (
    <div className={`${classes["home-feature--cont"]} ${"margin-btm"}`}>
      <div
        className={`${
          classes["feature-intro--cont"]
        } ${"center"} ${"border-radius"}`}
      >
        <div className={classes["feature-text--cont"]}>
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>
      <div className={classes["feature-item--cont"]}>
        <HomeFeatureItem
          image={coffeeBeanIcon}
          header={"Best quality"}
          description={
            "Discover an endless variety of the world's best artisan coffee from each of our roasters."
          }
          alt={"coffee bean image"}
        />
        <HomeFeatureItem
          image={giftIcon}
          header={"Exclusive Benefits"}
          description={
            "Special offers and swag when you subscribe, including 30% off your first shipment."
          }
          alt={"gift image"}
        />
        <HomeFeatureItem
          image={truckIcon}
          header={"Free shipping"}
          description={
            "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
          }
          alt={"truck image"}
        />
      </div>
    </div>
  );
}

export default HomeFeature;
