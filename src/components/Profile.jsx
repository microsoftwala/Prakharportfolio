import React, { useState, useEffect } from "react";
import "../css/slideshow.css";
import Imag from "../images/myImg1-removebg.png";
import Imag2 from "../images/img2-removebg-preview.png";
import "../css/slideshow.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import Bar from "./Bar.jsx";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

function Profile() {
  const [currentImage, setCurrentImage] = useState(1);
  const [images, setImages] = useState([]);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const image1 = new Image();
    image1.src = Imag;

    const image2 = new Image();
    image2.src = Imag2;

    setImages([image1, image2]);
  }, [Imag, Imag2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
    }, 10000);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-black md:h-screen overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        exit={{ opacity: 0 }}
        className="md:flex w-full bg-black md:h-screen"
      >
        <div className="bg-zinc-100 hover:bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-100 md:w-2/3 w-full text-2xl md:h-screen md:pb-0 pb-10">
          <div className="flex pt-10 justify-between ml-10 h-1/5 mr-10">
            <h1 className="text-3xl font-bold ">Prakhar.</h1>
            <div>
              {width < 765 ? (
                <div className="flex justify-start ml-10">
                  <button>
                    <Bar />
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="ml-10 mr-10 h-2/5 pt-5">
            <p className="font-bold md:text-4xl text:2xl text-yellow-800 ">
              UI/UX Designer & Developer
            </p>
            <div className="flex flex-col pt-5">
              <p className="font-bold xl:text-8xl text-6xl">I'm Prakhar</p>
              <p className="font-bold xl:text-8xl text-6xl ">Singh</p>
            </div>
          </div>
          {width > 765 ? (
            <div className="flex justify-center h-1/5 pt-20 ">
              <Link to="/about">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    color: "white",
                    backgroundColor: "gray",
                  }}
                  className="border text-2xl font-bold "
                >
                  More about me <ArrowForwardIcon />
                </motion.button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 md:w-1/3 w-full">
          {width >= 765 ? (
            <div className="flex justify-end mr-10 pt-5">
              <button>
                <Bar />
              </button>
            </div>
          ) : (
            ""
          )}
          {width <= 765 ? (
            <motion.div className="flex justify-center h-1/5 pt-8">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.03, color: "white" }}
                  className="border text-2xl font-bold"
                >
                  More about me <ArrowForwardIcon />
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            ""
          )}
          <motion.img
            key={currentImage}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, type: "tween" }}
            src={images[currentImage - 1]?.src}
            alt={`Prakhar ${currentImage}`}
            className="flex justify-center m-auto h-full custom-transition w-fit"
          />
        </div>
      </motion.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
