import { useState } from "react";
import classes from "./AccordionItem.module.css";
import ArrowIcon from "../svg/ArrowIcon";

function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(true);

  function accordionHandler() {
    setIsOpen((prevState) => !prevState);
  }
  console.log(isOpen);
  return (
    <div className={classes["accordion-item--cont"]}>
      <div className={classes["accordion-header--cont"]}>
        <h2>{props.header}</h2>
        <ArrowIcon onClick={accordionHandler} isArrowClicked={isOpen} />
      </div>
      {isOpen && (
        <div className={classes["accordion-options--cont"]}>
          <div className={`${classes["accordion-body"]} ${"border-radius"}`}>
            <h3> {props.firstText}</h3>
            <p>{props.firstDesc}</p>
          </div>
          <div className={`${classes["accordion-body"]} ${"border-radius"}`}>
            <h3> {props.secondText}</h3>
            <p>{props.secondDesc}</p>
          </div>
          <div className={`${classes["accordion-body"]} ${"border-radius"}`}>
            <h3> {props.thirdText}</h3>
            <p>{props.thirdDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
