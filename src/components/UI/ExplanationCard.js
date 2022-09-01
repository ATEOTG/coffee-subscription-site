import classes from "./ExplanationCard.module.css";

function ExplanationCard(props) {
  return (
    <div className={classes["explanation-card--cont"]}>
      <div className={classes["explanation-item--cont"]}>
        <h2 className={classes.number}>01</h2>
        <h3 style={{ color: `${props.color}` }}>Pick your coffee</h3>
        <p style={{ color: `${props.color}` }}>
          Select from our evolving range of artisan coffees. Our beans are
          ethically sourced and we pay fair prices for them. There are new
          coffees in all profiles every month for you to try out.
        </p>
      </div>
      <div className={classes["explanation-item--cont"]}>
        <h2 className={classes.number}>02</h2>
        <h3 style={{ color: `${props.color}` }}>Choose the frequency</h3>
        <p style={{ color: `${props.color}` }}>
          Customize your order frequency, quantity, even your roast style and
          grind type. Pause, skip or cancel your subscription with no commitment
          through our online portal.
        </p>
      </div>
      <div className={classes["explanation-item--cont"]}>
        <h2 className={classes.number}>03</h2>
        <h3 style={{ color: `${props.color}` }}>Recieve and enjoy!</h3>
        <p style={{ color: `${props.color}` }}>
          We ship your package within 48 hours, freshly roasted. Sit back and
          enjoy award-winning world-class coffees curated to proved a distinct
          tasting experience.
        </p>
      </div>
    </div>
  );
}

export default ExplanationCard;
