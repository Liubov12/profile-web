import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="section__title">{project.title}</h1>
          <a href={project.link}>
            <img
              src={project.img}
              alt={project.title}
              className="project_details_cover"
            />
          </a>

          <div className="project_details_desk">
            <p>Skills: {project.skills}</p>
          </div>

          <a
            href={project.gitHubLink}
            target="_blank"
            className="btn-outline"
            rel="noreferrer"
          >
            <img src="./img/icons/gitHub_black.svg" alt="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
};

export default Project;
