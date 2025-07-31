"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { use, useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }else {
      setIsDarkMode(false);
    }
  },[])

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Projects isDarkMode={isDarkMode} />
    <Experience isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <Footer />
    </>
  );
}
