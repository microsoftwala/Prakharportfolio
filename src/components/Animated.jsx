import React from "react";
import { Route, Routes, useLoaderData, useLocation } from "react-router-dom";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skill from "./Skill.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./Contact.jsx";
import Project from "./Project.jsx";

function Animated() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes >
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default Animated;
