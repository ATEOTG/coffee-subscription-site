import classes from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <div className={`${classes["accordion-cont"]} ${"center"} ${"margin-btm"}`}>
      <AccordionItem
        default={2}
        identifier="questionDrink"
        header="How do you drink your coffee?"
        firstText="Capsule"
        firstDesc="Compatible with Nepresso systems and similar brewers"
        secondText="Filter"
        secondDesc="For pour over or drip methods like Aeropress, Chemex, and V60"
        thirdText="Espresso"
        thirdDesc="Dense and finely ground beans for an intense, flavorful experience"
      />
      <AccordionItem
        default={2}
        identifier="questionType"
        header="What type of coffee?"
        firstText="Single Origin"
        firstDesc="Distinct, high quality coffee from a specific family-owned farm"
        secondText="Decaf"
        secondDesc="Just like regular coffee, except the caffeine has been removed"
        thirdText="Blended"
        thirdDesc="Combination of two or three dark roasted beans of organic coffees"
      />
      <AccordionItem
        default={1}
        identifier="questionMuch"
        header="How much would you like?"
        firstText="250g"
        firstDesc="Perfect for the solo drinker. Yields about 12 delicious cups."
        secondText="500g"
        secondDesc="Perfect option for a couple. Yields about 40 delectable cups."
        thirdText="1000g"
        thirdDesc="Perfect for offices and events. Yields about 90 delightful cups."
      />
      <AccordionItem
        default={3}
        identifier="questionGrind"
        header="Want us to grind them?"
        firstText="Wholebean"
        firstDesc="Best choice if you cherish the full sensory experience"
        secondText="Filter"
        secondDesc="For drip or pour-over coffee methods such as V60 or Aeropress"
        thirdText="Cafetiére"
        thirdDesc="Course ground beans specially suited for french press coffee"
      />
      <AccordionItem
        default={1}
        identifier="questionOften"
        header="How often should we deliver?"
        firstText="Every week"
        firstDesc="$7.20 per shipment. Includes free first-class shipping."
        secondText="Every 2 weeks"
        secondDesc="$9.60 per shipment. Includes free priority shipping."
        thirdText="Every month"
        thirdDesc="$12.00 per shipment. Includes free priority shipping."
      />
    </div>
  );
}

export default Accordion;
