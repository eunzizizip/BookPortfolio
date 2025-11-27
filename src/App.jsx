import React, { useState } from "react";
import Book from "./components/Book";

import Cover from "./pages/Cover";
import Contents from "./pages/Contents";
import Intro from "./pages/Intro";
import IntroDetails from "./pages/IntroDetails";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import DayIDetail from "./pages/DayIDetail";
import GreenMealDetail from "./pages/GreenMealDetail";
import Tone4uDetail from "./pages/Tone4uDetail";

import ResumeDownload from "./pages/ResumeDownload";

function App() {
  const [page, setPage] = useState(0);

  const pages = [

    <Contents onMovePage={(targetIndex) => setPage(targetIndex)} />,

    <Intro />,
    <IntroDetails />,
    <Skills />,

    <Projects
      onProjectClick={(target) => {
        if (target === "dayi") setPage(6);
        if (target === "greenmeal") setPage(7);
        if (target === "tone4u") setPage(8);
      }}
    />,

    <DayIDetail />,
    <GreenMealDetail />,
    <Tone4uDetail />,

    <ResumeDownload />,
    <Contact />
  ];

  return (
    <div className="app-root">
      <Book cover={<Cover />} pages={pages} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
