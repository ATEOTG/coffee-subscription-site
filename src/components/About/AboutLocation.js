import classes from "./AboutLocation.module.css";
import AboutLocationItem from "./AboutLocationItem";
import UkIcon from "../svg/UkIcon";
import CanadaIcon from "../svg/CanadaIcon";
import AustraliaIcon from "../svg/AustraliaIcon";

function AboutLocation() {
  return (
    <div className={`${classes["location-cont"]} ${"center"} ${"margin-btm"}`}>
      <h2 className={classes["header-text"]}>Our headquarters</h2>
      <div className={classes["location-item--cont"]}>
        <AboutLocationItem
          icon={<UkIcon />}
          header="United Kingdom"
          street="68 Asfordby Rd"
          city="Alcaston"
          postal="SY6 1YA"
          phone="+44 1241 918425"
        />
        <AboutLocationItem
          icon={<CanadaIcon />}
          header="Canada"
          street="1528 Eglinton Avenue"
          city="Toronto"
          postal="Ontario M4P 1A6"
          phone="+1 416 485 2997"
        />
        <AboutLocationItem
          icon={<AustraliaIcon />}
          header="Australia"
          street="36 Swanston Street"
          city="Kewell"
          postal="Victoria"
          phone="+61 4 9928 3629"
        />
      </div>
    </div>
  );
}

export default AboutLocation;
