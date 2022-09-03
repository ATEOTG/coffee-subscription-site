import classes from "./Subscribe.module.css";
import IntroCard from "../components/UI/IntroCard";
import ExplanationCard from "../components/UI/ExplanationCard";
import Accordion from "../components/Subscribe/Accordion";
import SubscribeSummary from "../components/Subscribe/SubscribeSummary";
import { Fragment, useState } from "react";
import Modal from "../components/Subscribe/Modal";

function Subscribe() {
  const [showModal, setShowModal] = useState(false);

  function modalHandler() {
    setShowModal(true);
  }
  return (
    <Fragment>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section className="margin-btm">
        <div className="center">
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
            <ExplanationCard color="#fff" />
          </div>
        </div>
        <Accordion />
        <SubscribeSummary onClick={modalHandler} />
      </section>
    </Fragment>
  );
}

export default Subscribe;
