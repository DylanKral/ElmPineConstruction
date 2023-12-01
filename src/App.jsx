import { useState } from "react";

import "./App.css";
import Hero from "./components/hero/Hero.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
