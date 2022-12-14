import classes from "./DropdownMenu.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const dropdownVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

function DropdownMenu(props) {
  return (
    <motion.div
      className={classes["dropdown-cont"]}
      key="menuDropdown"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul>
        <li>
          <Link to="/home" onClick={props.onClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={props.onClick}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/subscribe" onClick={props.onClick}>
            Create Your Plan
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default DropdownMenu;
