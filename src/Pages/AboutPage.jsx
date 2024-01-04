import React from "react";
import { skills, softSkills } from "../Constants";

const AboutPage = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, im{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Serhii Parchevskyi
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Experienced IT professional with a strong background in analytical
          problem-solving. Front-End developer with knowledge of HTML, CSS,
          JavaScript and React. All projects were completed using the
          Agile/Scrum methodology and strict adherence to deadlines. Excellent
          interpersonal skills and a proactive approach to problem-solving. Fast
          learner, responsible and always up for a challenges. Looking for
          opportunities to contribute to a dynamic and innovative IT team.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Tech Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Soft Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {softSkills.map((softSkill) => (
            <div className="block-container w-20 h-20" key={softSkill.name}>
              <div className="btn-back rounded-xl" />
              <div>
                <p>{softSkill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
