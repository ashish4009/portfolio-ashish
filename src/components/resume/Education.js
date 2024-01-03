import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Diploma in Advance computing (CDAC)"
            subTitle="AIT YCP, Nariman point-Mumbai (May-2022)"
            result="78%"
            des="The training provided by CDAC in order to prepare people to work in IT sectors of the areas of culture."
          />
          <ResumeCard
            title="Bachelor of Engineering"
            subTitle="Arvind Gavali college of engineering, satara [Shivaji University] (2017 - 2020)"
            result="64.5%"
            des="Stream in Computer Scinece and Engineering"
          />
          {/* <ResumeCard
            title="Diploma"
            subTitle="Satara Politechnic Satara (2014-2017)"
            result="58%"
            des="Stream in Automobile Engineering"
          /> */}
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            june-2022 to Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Front-End developer  (june 2022 - present)"
            result="Loylty Rewardz pvt ltd, Mumbai"
            des="Skills : Angular, Reactjs, HTML, CSS, TailwindCSS, JavaScript, TypeScript"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
