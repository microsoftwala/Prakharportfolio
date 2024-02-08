import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Bar from "./Bar.jsx";
import { Link } from "react-router-dom";
import "../css/slideshow.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "./Footer.jsx";

function Contact() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen w-full"
    >
      <div className="flex flex-col flex-grow">
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
              Contact
              <KeyboardDoubleArrowRightIcon />
            </span>
          </motion.div>
          <div className="md:text-5xl text-4xl flex justify-center font-serif font-bold pt-6">
            Contact Us
          </div>
        </div>
        <div className="box flex-grow m-auto">
          <div className="flex flex-col">
            <div className="md:text-4xl text-2xl flex font-bold font-serif justify-center flex-grow">
              Contact Us
            </div>
            <div className="text-2xl font-semibold md:flex justify-evenly pt-6 flex-grow">
              <div>
                Address:
                <div className="text-xl font-extralight text-yellow-600">
                  Ram Gulam Tola ,Deoria
                  <br></br>
                  Uttar Pradesh
                </div>
              </div>
              <div className="mt-10  md:mt-0">
                Email:
                <div className="text-xl font-extralight text-yellow-600">
                  {width < 768 ? (
                    <div>
                      prakhardeoria.2004
                      <br></br>@gmail.com{" "}
                    </div>
                  ) : (
                    <div>prakhardeoria.2004@gmail.com </div>
                  )}
                  <br></br>
                  ms2817948@gmail.com
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                Phone No:
                <div className="text-xl font-extralight text-yellow-600">
                  +91 6307112907
                </div>
              </div>
            </div>
            <motion.div className="text-2xl font-bold flex justify-center mt-10 pb-8 flex-grow">
              <motion.a
                href="https://gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-300 p-4 rounded-lg"
                whileHover={{
                  scale: 1.03,
                  color: "white",
                  backgroundColor: "lightorange",
                  border: "1px solid black",
                }}
              >
                Send Mail
                <ArrowForwardIcon />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default Contact;
