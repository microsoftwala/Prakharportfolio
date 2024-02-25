import React, { useEffect, useState } from "react";
import "../index.css";
import "../css/slideshow.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Bar from "./Bar.jsx";
import OutlinedCard from "./Card.jsx";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Footer from "./Footer.jsx";

function About() {
  const handleDownload = () => {
    const fileName = "NewResumePrakhar.pdf";
    const filePath = `${process.env.PUBLIC_URL}/${fileName}`;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      exit={{ opacity: 0 }}
      className="w-full bg-zinc-100 md:h-screen  min-h-screen overflow-x-hidden"
    >
      <div className="flex w-full flex-col">
        <div className="flex pt-10 m-auto justify-between w-full">
          <p className="pl-10 text-3xl font-bold ">Prakhar.</p>
          <div className="pr-10">
            <Bar />
          </div>
        </div>
        <div className="flex flex-col justify-center pt-20">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="md:text-2xl text-1xl font-serif font-bold flex justify-center"
          >
            <Link className="hover:text-yellow-500 md:text-2xl" to="/">
              Home
              <KeyboardDoubleArrowRightIcon />
            </Link>{" "}
            <span>
              About
              <KeyboardDoubleArrowRightIcon />
            </span>
          </motion.div>
          <div className="md:text-5xl text-4xl flex justify-center font-serif font-bold pt-6">
            About Us
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          animate={{ opacity: 1 }}
          className="xl:flex w-full pt-16 "
        >
          <motion.div className="xl:w-1/2 w-full pl-5 pr-5">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 1, duration: 2 }}
              animate={{ opacity: 1 }}
              className="md:flex justify-evenly"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="xl:pt-1 pt-8 xl:ml-0 ml-8 xl:mr-0 mr-8"
              >
                <OutlinedCard
                  values="3"
                  ques="Frontend Projects done"
                  color="linear-gradient(80deg, rgba(255, 165, 0, 0.5) 10%, rgba(0, 0, 0, 0.4) 97%)"
                  need="false"
                  width="275"
                  content1="Completed"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="xl:pt-1 pt-8 xl:ml-0 ml-8 xl:mr-0 mr-8"
              >
                <OutlinedCard
                  values="2"
                  ques="Full-stack Projects done"
                  color="linear-gradient(80deg, rgba(255, 165, 0, 0.4)10%, rgba(0, 0, 0, 0.4) 97%)"
                  need="false"
                  width="275"
                  content1="Completed"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 2, duration: 3 }}
              animate={{ opacity: 1 }}
              className="md:flex w-full justify-evenly md:pt-10"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="xl:pt-1 pt-8 xl:ml-0 ml-8 xl:mr-0 mr-8"
              >
                <OutlinedCard
                  values="200"
                  need="false"
                  ques="Number of Hours work"
                  color="linear-gradient(80deg, rgba(255, 165, 0, 0.5) 10%, rgba(0, 0, 0, 0.4) 97%)"
                  width="275"
                  content1="Spent 200 hours on webd"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="xl:pt-1 pt-8 xl:ml-0 ml-8 xl:mr-0 mr-8"
              >
                <OutlinedCard
                  values="1"
                  ques="Currently working project"
                  need="false"
                  color="linear-gradient(80deg, rgba(255, 165, 0, 0.4) 10%, rgba(0, 0, 0, 0.4) 97%)"
                  width="275"
                  content1="Going on"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="xl:w-1/2 w-full pl-5 pr-5 xl:pt-1 pt-16">
            <div className="">
              <h1 className="md:text-2xl text-1xl font-bold font-serif text-yellow-500">
                About Me
              </h1>
              <div className="md:text-4xl text-3xl font-bold font-serif pt-4">
                A UI/UX Designer & Web Developer
              </div>
              <div className="pt-5 font-serif">
                Computer science student at IIITDM Kancheepuram, good in various
                programming languages like <b>C</b>, <b>C++</b>, <b>Python</b>,
                and <b>JavaScript</b>, skills extend to <b>full-stack</b>{" "}
                development using <b>ReactJS, Next.js</b>,<b>MongoDb, MySQL </b>
                interested to enhance skill in software development. Currently
                interested to contribute in web development and ML area. Beyond
                coding, I am keen on discussing global affairs, including
                geopolitics, international relations, national politics, and
                public issues.
              </div>
              <div className="pt-16 flex flex-col items-start ">
                <div className="font-bold mb-2 ">
                  <span className="text-gray-600">Name:</span>
                  <span className="text-yellow-600 ml-2">Prakhar Singh</span>
                </div>
                <div className="font-bold mb-2">
                  <span className="text-gray-600">Email:</span>
                  <span className="text-yellow-600 ml-2">
                    prakhardeoria.2004@gmail.com
                  </span>
                </div>
                <div className="font-bold mb-2">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="text-yellow-600 ml-2">25 Oct 2004</span>
                </div>
                <div className="font-bold mb-2">
                  <span className="text-gray-600">ZIP Code:</span>
                  <span className="text-yellow-600 ml-2">600127</span>
                </div>
                <div className="font-bold mb-2">
                  <span className="text-gray-600">Address:</span>
                  <span className="text-yellow-600 ml-2">
                    IIITDM Kancheepuram,Chennai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-14 flex justify-center mb-10 w-full">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "gray", color: "white" }}
          className="bg-orange-300 pt-3 pb-3 pl-7 pr-7 rounded font-bold text-2xl"
          onClick={handleDownload}
        >
          Download Resume <ArrowDownwardIcon />
        </motion.button>
      </div>
      <Footer />
    </motion.div>
  );
}

export default About;
