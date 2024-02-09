import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import Bar from "./Bar";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import Dash from "../images/dashboard.png";
import Bank from "../images/bank.png";
import Test from "../images/online.png";
import Sae from "../images/sae.png";
import News from "../images/News.png";
import Tax from "../images/Tax.png";
import Codechef from "../images/codechef1.png";
import Codechef1 from "../images/codechef2.png";
import Leetcode from "../images/leetcode.png";

function Project() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [width]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
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
              Project & Acheivment
              <KeyboardDoubleArrowRightIcon />
            </span>
          </motion.div>
          <div className="md:text-5xl text-4xl flex justify-center font-serif font-bold pt-6">
            Project
          </div>
        </div>
      </div>
      <div className="ml-10 mr-10 mb-4 mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 1 }}
          exit={{ opacity: 0 }}
          className="md:flex justify-evenly md:ml-0 "
        >
          <div className="mb-6 flex justify-center ">
            <ProjectCard
              key={1}
              image={Bank}
              link="https://github.com/ANIKEtguPta77/bank"
              title="Banking Website"
              width={width}
              data="This Website comes under DBMS Project."
              linksval="Github Repo"
              method="Our collaborative effort resulted in a sophisticated banking platform, merging React for frontend and Node.js for backend development. Users securely open accounts with email and phone number verification, reinforced by OTP authentication through Twilio. Upon registration, users access a comprehensive suite of banking functionalities, including balance inquiries, fund transfers, and transaction tracking. Our technology stack ensures dynamic and responsive interfaces across devices, prioritizing user experience. Stringent security measures, including encryption protocols, fortify user data. Meticulous integration of frontend and backend components ensures smooth data flow and a cohesive user journey. Fueled by innovation and excellence, our project delivers a professional-grade banking solution set to redefine the digital banking landscape."
            />
          </div>
          <div className="mb-6 flex justify-center">
            <ProjectCard
              image={Dash}
              key={2}
              linksval="Github Repo"
              title="Dashboard"
              width={width}
              data="This was developed by me using React to check my skills."
              method="During my React journey, I delved into integrating diverse charts into my website, igniting my interest in visual data representation. Experimenting with line charts and pie charts was exhilarating, breathing life into my website with vibrant visuals that enhanced data comprehension. Exploring chart implementation not only enriched my React skills but also elevated my understanding of data visualization's significance."
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 1.7 }}
          exit={{ opacity: 0 }}
          className="md:flex justify-evenly"
        >
          <div className="mb-6 flex justify-center">
            <ProjectCard
              key={3}
              linksval="Github Repo"
              image={Test}
              title="Test Conducting Website"
              width={width}
              link="https://github.com/microsoftwala/Testwebsite2"
              data="This was given by HCL."
              method="Welcome to our Full Stack website, where the power of Django technology brings your personalized learning experience to life! Dive into a world where testing is tailored to your individual journey, providing a unique and enriching way to gauge your knowledge and progress. Explore our platform, where after completing a test, you can instantly view your results, unlocking insights into your strengths and areas for growth.But our platform isn't just for learners; teachers are invited to join the community and contribute their expertise by crafting thought-provoking questions. Together, we create an ecosystem of learning that's vibrant, collaborative, and constantly evolving. Join us on this exciting educational adventure, where every question posed is a step towards enlightenment!"
            />
          </div>
          <div className="mb-6 flex justify-center">
            <ProjectCard
              image={Sae}
              key={4}
              linksval="Github Repo"
              link="https://github.com/microsoftwala/spon"
              title="College Club Website"
              width={width}
              data="This was my college SAE club website which was developed by me and my team."
              method="In the dynamic landscape of 2023, I had the honor of spearheading an exciting project assigned to us by our esteemed college club, SAE. As the lead of this ambitious endeavor, I collaborated closely with a dedicated team of 3 to 4 members to bring our vision to life.Our mission? To create a captivating website that serves as a vibrant showcase of SAE club's achievements, current initiatives, and the remarkable work being undertaken by our members. With the cutting-edge capabilities of React, we crafted a digital masterpiece that not only highlights the accomplishments of our club but also provides a glimpse into the innovative projects and activities driving our community forward.From showcasing our proudest achievements to spotlighting the talented individuals who make up our SAE family, every element of the website was meticulously designed to inspire, inform, and engage our audience. Together, we forged a digital frontier where creativity knows no bounds and where the spirit of SAE shines brightly for all to see."
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 2.5 }}
          exit={{ opacity: 0 }}
          className="md:flex justify-evenly"
        >
          <div className="mb-6 flex justify-center">
            <ProjectCard
              image={News}
              linksval="Github Repo"
              title="News Website"
              link="https://github.com/microsoftwala/newsWebsite"
              width={width}
              data="This project was given by one startup for testing purpose."
              method="Utilizing a news API, I crafted a backend-free news website. Users sign in to access a personalized dashboard, displaying current headlines. With search functionality, users explore news topics of interest. The platform offers real-time updates and intuitive navigation, enhancing user engagement."
            />
          </div>
          <div className="mb-6 flex justify-center">
            <ProjectCard
              image={Tax}
              link="https://github.com/microsoftwala/Taxwebsite1"
              title="Tax calculator and money Transfer"
              width={width}
              data="This Project is Full Stack"
              method="Embark on a journey of financial empowerment with our tax calculator website, meticulously crafted with ReactJS and empowered by MongoDB. Seamlessly calculate your taxes and effortlessly transfer funds with Node.js integration. Delve into a world of fiscal management where simplicity meets sophistication, empowering users to navigate their financial landscape with ease and confidence."
              linksval="Github Repo"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex w-full flex-col mb-10">
        <div className="flex flex-col justify-center pt-20">
          <div className="md:text-5xl text-4xl flex justify-center font-serif font-bold pt-6">
            Acheivments
          </div>
        </div>

        <div className="mt-20 pl-6 pr-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.7 }}
            exit={{ opacity: 0 }}
            className="md:flex justify-evenly"
          >
            <div className="mb-6 flex justify-center">
              <ProjectCard
                key={7}
                image={Codechef1}
                title="CodeChef1"
                width={width}
                data="Code Chef"
                method=""
                link="https://www.codechef.com/users/prakhar68"
                linksval="CodeChef Link"
              />
            </div>
            <div className="mb-6 flex justify-center">
              <ProjectCard
                image={Codechef}
                key={8}
                title="Codechef2"
                width={width}
                data="Code Chef"
                method=""
                link="https://www.codechef.com/users/iiitdm124"
                linksval="CodeChef Link"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.7 }}
            exit={{ opacity: 0 }}
            className="md:flex justify-evenly"
          >
            <div className="mb-6 flex justify-center">
              <ProjectCard
                key={7}
                image={Leetcode}
                title="Leetcode"
                width={width}
                data="Leetcode"
                method=""
                link="https://leetcode.com/prakhar_12345/"
                linksval="Leetcode Profile"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Project;
