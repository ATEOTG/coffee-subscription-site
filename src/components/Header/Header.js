import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIconOpen from "../svg/MenuIconOpen";
import MenuIconClose from "../svg/MenuIconClose";
import logo from "../../assets/shared/desktop/logo.svg";
import classes from "./Header.module.css";
import DropdownMenu from "./DropdownMenu";
import DesktopMenu from "./DesktopMenu";
import useWindowWidth from "../hook/use-window";

const mobileMenuVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowWidth();

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  useEffect(() => {
    width >= 768
      ? setIsMenuOpen(false)
      : setIsMenuOpen((prevState) => prevState);
  }, [width]);

  function menuStateHandler() {
    setIsMenuOpen((prevState) => !prevState);
  }
  return (
    <header className={`${classes.header} ${"center"}`}>
      <img src={logo} className={classes.image} alt="coffee roaster logo" />

      <nav>
        <DesktopMenu />
        <AnimatePresence mode="wait">
          {!isMenuOpen && (
            <motion.div
              key="menuOpen"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MenuIconOpen onClick={menuStateHandler} />
            </motion.div>
          )}

          {isMenuOpen && (
            <motion.div
              key="menuClose"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MenuIconClose onClick={menuStateHandler} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence onExitComplete={() => setIsMenuOpen(false)}>
        {isMenuOpen && <DropdownMenu onClick={menuStateHandler} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;
