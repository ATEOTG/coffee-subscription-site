import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
