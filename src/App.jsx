import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import "./App.css";
import Footer from "./component/NewFoter";

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Project />
      </main>
      <Footer />
    </>
  );
}

export default App;
