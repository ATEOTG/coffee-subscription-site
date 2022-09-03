import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectionActions } from "../../store";
import classes from "./AccordionItem.module.css";
import ArrowIcon from "../svg/ArrowIcon";

function AccordionItem(props) {
  const dispatch = useDispatch();
  const firstSelection = useRef();
  const secondSelection = useRef();
  const thirdSelection = useRef();
  const drink = useSelector((state) => state.drink);
  const type = useSelector((state) => state.type);
  const much = useSelector((state) => state.much);
  const grind = useSelector((state) => state.grind);
  const often = useSelector((state) => state.often);
  const amount = useSelector((state) => state.amount);
  const stateArr = [drink, type, much, grind, often, amount];

  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const firstOption = firstSelection.current.firstChild.innerHTML;
    const secondOption = secondSelection.current.firstChild.innerHTML;
    const thirdOption = thirdSelection.current.firstChild.innerHTML;

    for (const value of stateArr) {
      if (value.toUpperCase() === firstOption.toUpperCase()) {
        setSelected(firstSelection.current);
      }
      if (value.toUpperCase() === secondOption.toUpperCase()) {
        setSelected(secondSelection.current);
      }
      if (value.toUpperCase() === thirdOption.toUpperCase()) {
        setSelected(thirdSelection.current);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function accordionHandler() {
    setIsOpen((prevState) => !prevState);
  }

  function selectedHandler(ele) {
    setSelected(ele.currentTarget);
    const value = ele.currentTarget.firstChild.innerHTML;
    if (props.identifier === "questionDrink") {
      dispatch(selectionActions.drinkOption(value));
    }
    if (props.identifier === "questionType") {
      dispatch(selectionActions.typeOption(value));
    }
    if (props.identifier === "questionMuch") {
      dispatch(selectionActions.muchOption(value));
    }
    if (props.identifier === "questionGrind") {
      dispatch(selectionActions.grindOption(value));
    }
    if (props.identifier === "questionOften") {
      const words = value.split(" ");
      const word = words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");

      dispatch(selectionActions.oftenOption(word));
    }
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
          <h3>{props.firstText}</h3>
          <p>{props.firstDesc}</p>
        </div>
        <div
          onClick={selectedHandler}
          ref={secondSelection}
          className={`${classes["accordion-body"]} ${"border-radius"} ${
            selected === secondSelection.current ? classes.selected : ""
          }`}
        >
          <h3>{props.secondText}</h3>
          <p>{props.secondDesc}</p>
        </div>
        <div
          onClick={selectedHandler}
          ref={thirdSelection}
          className={`${classes["accordion-body"]} ${"border-radius"} ${
            selected === thirdSelection.current ? classes.selected : ""
          }`}
        >
          <h3>{props.thirdText}</h3>
          <p>{props.thirdDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
