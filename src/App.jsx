import Header from "./compoent/1-Header/Header";
import Hero from "./compoent/2-Hero/Hero";
import Main from "./compoent/3-Main/Main";
import Contact from "./compoent/4-Contact/Contact";
import Footer from "./compoent/5-Footer/Footer";

import { useEffect, useState } from "react";
//import viteLogo from './.Ahmet.png'

import "./index.css";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollBTN(true);
      } else {
        setScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />

      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "3s" }}
        href="#up"
      >
        <button
          style={{ color: "white" }}
          className="  icon-keyboard_arrow_up scroll2Top"
        ></button>
      </a>
    </div>
  );
}

export default App;
