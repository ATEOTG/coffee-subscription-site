import classes from "./AboutQuality.module.css";
import bgQualityMobile from "../../assets/about/mobile/image-quality.jpg";
import bgQualityTablet from "../../assets/about/tablet/image-quality.jpg";

function AboutQuality() {
  return (
    <div
      className={`${
        classes["quality-cont"]
      } ${"border-radius"} ${"margin-btm"}`}
    >
      <img
        className={`${classes["quality-img--mob"]} ${"border-radius"}`}
        src={bgQualityMobile}
        alt="white cup with coffee"
      />
      <img
        className={`${classes["quality-img--tab"]} ${"border-radius"}`}
        src={bgQualityTablet}
        alt="white cup with coffee"
      />
      <div className={classes["quality-text--cont"]}>
        <h2>Uncompromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default AboutQuality;
