import { previewImage, fallbackImage } from "../data/projects";
const ProjectCard = ({ title, githubUrl, techStack, previewImage }) => {
//   const fallbackImage = "images/img-02.webp";

  return (
    <a className="project-card" href={githubUrl} target="_blank" rel="noopener noreferrer">
      <div className="img-holder">
        <img
          src={previewImage}
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
      </div>
      <div className="describe-block">
        <div className="top-block">
          <h6>{title}</h6>
        </div>
        <div className="bottom-block">
          <span className="subtitle">Use:</span>&nbsp;
          <span className="tags">{techStack.join(", ")}</span>
          <i className="ico-github"></i>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;