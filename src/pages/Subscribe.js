import classes from "./Subscribe.module.css";
import IntroCard from "../components/UI/IntroCard";
import ExplanationCard from "../components/UI/ExplanationCard";
import Accordion from "../components/Subscribe/Accordion";
import SubscribeSummary from "../components/Subscribe/SubscribeSummary";
import { Fragment, useState } from "react";
import Modal from "../components/Subscribe/Modal";
import SubscribeTable from "../components/Subscribe/SubscribeTable";

function Subscribe() {
  const [showModal, setShowModal] = useState(false);

  function modalHandler() {
    setShowModal(true);
  }
  return (
    <Fragment>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section className={`${classes.subscribe} ${"margin-btm"}`}>
        <div className={`${classes["subscribe-intro"]} ${"center"}`}>
          <IntroCard
            background={classes["subscribe-background--img"]}
            header="Create a plan"
            paragraph="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
          />
        </div>
        <div
          className={`${
            classes["explanation-cont"]
          } ${"border-radius"} ${"margin-btm"}`}
        >
          <div className="center">
            <div className={classes["step-line--cont"]}>
              <div className={classes["circle-cont"]}>
                <div className={classes["circle"]}></div>
                <div className={classes["circle"]}></div>
                <div className={classes["circle"]}></div>
                <div className={classes["horizontal-line"]}></div>
              </div>
            </div>

            <ExplanationCard color="#fff" />
          </div>
        </div>
        <div className={classes["selection-section--cont"]}>
          <SubscribeTable />
          <div className={classes["selection-cta--cont"]}>
            <Accordion />
            <SubscribeSummary onClick={modalHandler} />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Subscribe;
