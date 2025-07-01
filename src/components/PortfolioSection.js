import ProjectCard from "./ProjectCard";
import { projects, fallbackImage } from "../data/projects";

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="title-block">
          <h3>Portfolio</h3>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="column" key={project.id}>
              <ProjectCard
                title={project.title}
                githubUrl={project.githubUrl}
                techStack={project.techStack}
                previewImage={project.previewImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;