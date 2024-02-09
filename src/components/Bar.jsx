import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import SubjectIcon from "@mui/icons-material/Subject";
import { Hidden } from "@mui/material";

function Bar() {
  const [icon, setIcon] = useState(false);
  const [width, setWidth] = useState(0);
  const [heigth, setHeigth] = useState(0);
  const [rotate, setRotate] = useState(false);
  function handleClick(e) {
    setIcon((prev) => !prev);
    setRotate((prev) => !prev);
  }

  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: rotate ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleClick}
        className="cursor-pointer"
      >
        {icon === false ? (
          <MenuIcon className="font-bold" />
        ) : (
          <ClearIcon className="font-bold" />
        )}
      </motion.div>
      {icon === true ? (
        <motion.div
          drag
          dragConstraints={{ bottom: 50, right: 10, left: 100, top: -10 }}
          animate={{ y: 15, scale: 1.1 }}
          initial={{ scale: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute right-0 bg-gradient-to-r from-zinc-800 to-zinc-600 rounded-md shadow-md md:w-68 w-48 py-3 text-zinc-100"
          style={{ fontSize: "18px" }}
        >
          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              to="/"
              className="flex mb-2 hover:text-yellow-600 font-serif font-bold justify-center"
            >
              <HomeIcon /> <span className="pl-2">Home</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              to="/about"
              className="flex mb-2 hover:text-yellow-600 font-serif font-bold justify-center"
            >
              <InfoIcon />
              <span className="pl-2">About</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              to="/skill"
              className="flex mb-2 hover:text-yellow-600 font-serif font-bold justify-center"
            >
              <span className="pr-4">
                <SchoolIcon />
              </span>
              <span className="">Skills</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              to="/project"
              className="flex hover:text-zinc-00 font-serif font-bold  hover:text-yellow-600 justify-center"
            >
              <span className="pr-2 pl-4">
                <SubjectIcon />
              </span>
              <span>Project</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              to="/contact"
              className="flex hover:text-zinc-00 font-serif font-bold hover:text-yellow-600 justify-center pt-2"
            >
              <span className="pr-2 pl-4">
                <ContactPageIcon />
              </span>
              <span>Contact</span>
            </Link>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}

export default Bar;
