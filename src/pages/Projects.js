import Header from "../components/header/Header";
import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";

const Projects = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h2 className="section__title">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
