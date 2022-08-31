import HomeCollection from "../components/Home/HomeCollection";
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
      />
      <HomeCollection />
    </section>
  );
}

export default Home;
