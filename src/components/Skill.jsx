import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Bar from "./Bar.jsx";
import { Link } from "react-router-dom";
import OutlinedCard from "./Card.jsx";
import { UilBookReader } from "@iconscout/react-unicons";
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilBrowser } from '@iconscout/react-unicons'
import Footer from "./Footer.jsx";

function Skill() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
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
                Skills
                <KeyboardDoubleArrowRightIcon />
              </span>
            </motion.div>
            <div className="md:text-5xl text-4xl flex justify-center font-serif font-bold pt-6">
              Education
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            animate={{ opacity: 1 }}
            className="xl:flex w-full pt-16 "
          >
            <motion.div className="w-full pl-5 pr-5">
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 1, duration: 2 }}
                animate={{ opacity: 1 }}
                className="xl:flex justify-evenly"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="xl:pt-1 pt-8 xl:ml-0 ml-8 xl:mr-0 mr-8"
                >
                  <OutlinedCard
                    values="82%"
                    ques="High School"
                    color="linear-gradient(80deg, rgba(255, 165, 0, 0.5) 10%, rgba(0, 0, 0, 0.4) 97%)"
                    need="true"
                    width="375"
                    content="Government Inter College"
                    content1 = "2017-2018"
                    content2={<UilGraduationCap size="45"/>}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="xl:pt-1 pt-8 xl:ml-0 ml-8 xl:mr-0 mr-8"
                >
                  <OutlinedCard
                    values="80%"
                    ques="Intermediate"
                    color="linear-gradient(80deg, rgba(255, 165, 0, 0.4)10%, rgba(0, 0, 0, 0.4) 97%)"
                    need="true"
                    width="375"
                    content="Government Inter College"
                    content1 = "2019-2020"
                    content2={<UilGraduationCap size="45"/>} 
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 2, duration: 3 }}
                animate={{ opacity: 1 }}
                className="xl:flex w-full justify-evenly xl:pt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="xl:pt-1 pt-8 xl:ml-0 ml-8 xl:mr-0 mr-8"
                >
                  <OutlinedCard
                    values="8 CGPA"
                    need="true"
                    ques="Graduation"
                    color="linear-gradient(80deg, rgba(255, 165, 0, 0.5) 10%, rgba(0, 0, 0, 0.4) 97%)"
                    width="375"
                    content="IIITDM Kancheepuram"
                    content1 = "2021 still going on"
                    content2={<UilBookReader size="45"/>}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="xl:pt-1 pt-8 xl:ml-0 ml-8 xl:mr-0 mr-8"
                >
                  <OutlinedCard
                    values="10 Plus"
                    ques="Web developer"
                    need="true"
                    color="linear-gradient(80deg, rgba(255, 165, 0, 0.4) 10%, rgba(0, 0, 0, 0.4) 97%)"
                    width="375"
                    content="Start In college"
                    content1="2022 still going on"
                    content2={<UilBrowser size="40"/>}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="mt-16 md:text-5xl text-4xl flex justify-center font-serif font-bold pt-6">
            <p className="text-xl font-normal text-yellow-500">Skills</p>
          </div>
          <motion.div className="md:text-5xl text-4xl flex justify-center font-serif font-bold pt-2">
            <h1>My Skills</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 2 }}
            className="w-full  justify-evenly mb-20 xl:mt-28 mt-20 xl:pl-0 xl:pr-0 pl-10 pr-10"
          >
            <div className="xl:flex justify-evenly w-full">
              <div className="xl:w-1/4 w-full">
                <div className="flex justify-evenly">
                  <h3 className="font-bold ">C++</h3>
                  <span className="font-bold text-yellow-600">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="  skills__percentage w-56 skills__css"></span>
                </div>
              </div>
              <div className="xl:w-1/4 w-full xl:mt-0 mt-6">
                <div className="flex justify-evenly">
                  <h3 className="font-bold">Python</h3>
                  <span className="font-bold text-yellow-600">45%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css w-40"></span>
                </div>
              </div>
              <div className="xl:w-1/4 w-full xl:mt-0 mt-6">
                <div className="flex justify-evenly">
                  <h3 className="font-bold">JavaScript</h3>
                  <span className="text-yellow-600 font-bold">40%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css w-32"></span>
                </div>
              </div>
            </div>
            <div className="xl:flex justify-evenly w-full xl:mt-6 mt-6">
              <div className="xl:w-1/4 w-full">
                <div className="flex justify-evenly">
                  <h3 className="font-bold">HTML5</h3>
                  <span className="font-bold text-yellow-600">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="  skills__percentage skills__css w-60"></span>
                </div>
              </div>
              <div className="xl:w-1/4 w-full xl:mt-0 mt-6">
                <div className="flex justify-evenly">
                  <h3 className="font-bold">CSS</h3>
                  <span className="font-bold text-yellow-600">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css w-44"></span>
                </div>
              </div>
              <div className="xl:w-1/4 w-full xl:mt-0 mt-6">
                <div className="flex justify-evenly">
                  <h3 className="font-bold">React</h3>
                  <span className="font-bold text-yellow-600">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css w-56"></span>
                </div>
              </div>
            </div>
            <div className="xl:flex justify-evenly w-full xl:mt-6 mt-6">
              <div className="xl:w-1/4 w-full">
                <div className="flex justify-evenly">
                  <h3 className="font-bold">Node Js</h3>
                  <span className="font-bold text-yellow-600">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="  skills__percentage skills__css w-44"></span>
                </div>
              </div>
              <div className="xl:w-1/4 w-full xl:mt-0 mt-6">
                <div className="flex justify-evenly">
                  <h3 className="font-bold">Mongo Db</h3>
                  <span className="font-bold text-yellow-600">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css w-52"></span>
                </div>
              </div>
              <div className="xl:w-1/4 w-full xl:mt-0 mt-6">
                <div className="flex justify-evenly">
                  <h3 className="font-bold">Maching Learning</h3>
                  <span className="font-bold text-yellow-600">40%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css w-32"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer/>
      </motion.div>
    </AnimatePresence>
  );
}

export default Skill;
