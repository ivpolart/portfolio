import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import Button from '../components/Button';
import { projects, fallbackImage } from "../data/projects";

const sliderSettings = {
  slidesToShow: 3,
  arrows: true,
  infinite: true,
  rows: 1, 
  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="title-block">
          <h3>Projects</h3>
        </div>

        <Slider {...sliderSettings} className="projects-slider">
          {projects.slice(0, 5).map((project) => (
            <div className="slide" key={project.id}>
              <ProjectCard
                title={project.title}
                githubUrl={project.githubUrl}
                techStack={project.techStack}
                previewImage={project.previewImage}
              />
            </div>
          ))}
        </Slider>

        <div className="btn-holder">
          <Button href="/portfolio" isInternal={true}>More Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
