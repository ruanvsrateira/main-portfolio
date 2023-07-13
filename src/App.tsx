import React from "react";
import { Header } from "./components/section/Header";
import { Apresentation } from "./components/section/Apresentation";
import { Skills } from "./components/section/Skills";
import { Projects } from "./components/section/Projects";
import { Footer } from "./components/section/Footer";
import { Wrapper } from "./components/elements/Wrapper";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Apresentation />
        <Wrapper />
        <Skills />
        <Wrapper />
        <Projects />
        <Footer />
      </div>
    </React.Fragment>
  );
};
