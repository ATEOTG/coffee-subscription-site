import { useState, useRef } from "react";
import classes from "./AccordionItem.module.css";
import ArrowIcon from "../svg/ArrowIcon";

function AccordionItem(props) {
  const firstSelection = useRef();
  const secondSelection = useRef();
  const thirdSelection = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState("");

  function accordionHandler() {
    setIsOpen((prevState) => !prevState);
  }

  function selectedHandler(ele) {
    setSelected(ele.currentTarget);
  }

  return (
    <div className={classes["accordion-item--cont"]}>
      <div className={classes["accordion-header--cont"]}>
        <h2>{props.header}</h2>
        <ArrowIcon onClick={accordionHandler} isArrowClicked={isOpen} />
      </div>
      <div
        className={`${classes["accordion-options--cont"]} ${
          isOpen ? "" : classes.close
        }`}
      >
        <div
          onClick={selectedHandler}
          ref={firstSelection}
          className={`${classes["accordion-body"]} ${"border-radius"} ${
            selected === firstSelection.current ? classes.selected : ""
          }`}
        >
          <h3> {props.firstText}</h3>
          <p>{props.firstDesc}</p>
        </div>
        <div
          onClick={selectedHandler}
          ref={secondSelection}
          className={`${classes["accordion-body"]} ${"border-radius"} ${
            selected === secondSelection.current ? classes.selected : ""
          }`}
        >
          <h3> {props.secondText}</h3>
          <p>{props.secondDesc}</p>
        </div>
        <div
          onClick={selectedHandler}
          ref={thirdSelection}
          className={`${classes["accordion-body"]} ${"border-radius"} ${
            selected === thirdSelection.current ? classes.selected : ""
          }`}
        >
          <h3> {props.thirdText}</h3>
          <p>{props.thirdDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
