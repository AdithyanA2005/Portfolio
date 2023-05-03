import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

type Props = {};

export default function AboutSection({ }: Props) {
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdxhi94Vy3IncxfKzo-eIhF2n-ez_D1MqVdlkW8lhHjlwK8N4xH2X94pBPl-Dl_QJDQk&usqp=CAU";
  return (
    <SectionWrapper id="about">
      <div className="h-full max-w-7xl mx-auto">
        <SectionHeading title="about me" />

        {/* My Image */}
        <motion.img
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-full md:rounded-lg w-44 md:w-72 md:mt-5 lg:mt-8 mb-5 md:mr-5 lg:mr-10 xl:mr-14 mx-auto float-none md:float-left"
          src={imageUrl}
          alt="Adithyan"
        />

        {/* Paragraphs */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-full overflow-y-auto text-[1rem] md:text-lg md:mt-5 lg:mt-8"
        >
          <p className="text-gray-200 leading-7 md:leading-8 tracking-wider">
            <span>Hello, I am <b className="text-yellow-500">Adithyan A</b>,</span> <br />
            <span> I am from Kerala, India. Ever since I was introduced to the world of programming, I have been fascinated by the endless possibilities of it. I have a strong passion for coding and building digital solutions. I am constantly challenging myself to learn new technologies and programming languages to enhance my skills and stay up-to-date with the latest industry trends. I am looking for opportunities to collaborate and work with like-minded who share my passion for coding. Other than coding I spend time with my pet dog </span>
          </p>
        </motion.div>

        {/* Dog svg */}
        <motion.img
          initial={{ right: 0 }}
          whileInView={{ right: ["10vw", "25vw", "40vw", "55vw", "65vw", "70vw", "75vw", "87vw", "95vw", "100vw"] }}
          transition={{ duration: 10 }}
          className="absolute animate-pulse bottom-0 h-36 rounded-lg shadow-lg"
          src="/dog.svg"
        />

        {/* Photographer svg */}
        <motion.img
          initial={{ right: 0 }}
          whileInView={{ right: ["15vw", "15vw", "30vw", "40vw", "50vw", "60vw", "70vw", "77vw", "90vw", "100vw"] }}
          transition={{ duration: 10 }}
          className="absolute bottom-0 block h-56 rounded-lg animate-pulse shadow-lg"
          src="/photographer.svg"
        />
      </div>
    </SectionWrapper>
  );
};
