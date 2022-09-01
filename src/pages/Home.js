import HomeCollection from "../components/Home/HomeCollection";
import HomeExplanation from "../components/Home/HomeExplanation";
import HomeFeature from "../components/Home/HomeFeature";
import IntroCard from "../components/UI/IntroCard";
import classes from "./Home.module.css";

function Home() {
  return (
    <section className="center">
      <IntroCard
        background={classes["home-background--img"]}
        header={"Great coffee made simple."}
        paragraph={
          "Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        }
        buttonText={"Create your plan"}
        hasButton={true}
      />
      <HomeCollection />
      <HomeFeature />
      <HomeExplanation />
    </section>
  );
}

export default Home;
