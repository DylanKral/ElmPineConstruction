import { useState } from "react";

import "./App.css";
import Hero from "./components/hero/Hero.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
    </>
  );
}

export default App;
