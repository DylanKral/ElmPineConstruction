import { useState } from "react";

import "./App.css";
import Hero from "./components/hero/Hero.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

export default App;
