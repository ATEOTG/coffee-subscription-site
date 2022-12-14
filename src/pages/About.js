import AboutCommitment from "../components/About/AboutCommitment";
import AboutLocation from "../components/About/AboutLocation";
import AboutQuality from "../components/About/AboutQuality";
import IntroCard from "../components/UI/IntroCard";
import classes from "./About.module.css";

function About() {
  return (
    <section className="center">
      <IntroCard
        background={classes["about-background--img"]}
        header="About us"
        paragraph="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffe from around the world. We have since been dedicated to bring the perfect cup - from bean to brew in every shipment."
      />
      <AboutCommitment />
      <AboutQuality />
      <AboutLocation />
    </section>
  );
}

export default About;
