import classes from "./Modal.module.css";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../UI/Button";
import { Fragment } from "react";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 30 },
  },
};

function Modal(props) {
  const drink = useSelector((state) => state.drink);
  const type = useSelector((state) => state.type);
  const much = useSelector((state) => state.much);
  const grind = useSelector((state) => state.grind);
  const often = useSelector((state) => state.often);
  const amount = useSelector((state) => state.amount);
  return (
    <AnimatePresence exitBeforeEnter>
      {props.showModal && (
        <Fragment>
          <motion.div
            className={classes.backdrop}
            variants={backdropVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
            onClick={() => props.setShowModal(false)}
          ></motion.div>

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`${classes.modal} ${"center"}`}
          >
            <h2 className={classes["modal-header"]}>Order Summary</h2>
            <div className={classes["modal-text--cont"]}>
              <h2>
                “I drink my coffee{" "}
                {drink === "Filter" || drink === "Espresso" ? "as" : "using"}{" "}
                <span className={classes.custom}>
                  {drink}
                  {drink === "Capsule" ? "s" : ""}
                </span>
                , with a <span className={classes.custom}>{type}</span> type of
                bean. <span className={classes.custom}>{much}</span>{" "}
                {drink === "Capsule" ? (
                  ""
                ) : (
                  <span>
                    ground ala <span className={classes.custom}>{grind}</span>,{" "}
                  </span>
                )}{" "}
                sent to me <span className={classes.custom}>{often}</span>.”
              </h2>
              <p>
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.
              </p>
              <div onClick={() => props.setShowModal(false)}>
                <Button buttonText={`Checkout - $${amount}/mo`} />
              </div>
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}

export default Modal;
