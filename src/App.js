import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
function App() {
  return (
    <div>
      <Project />
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}

export default App;
