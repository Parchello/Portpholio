import React from "react";
import { projects } from "../Constants";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
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
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col ">
              <h4>{project.name} </h4>
              <p>{project.description}</p>
              <div>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
