import fallbackImage from "../images/img-02.webp";
import positivusImg from "../images/pp-positivus.png";
import shebaImg from "../images/pp-sheba.png";
import gamesImg from "../images/pp-games.png";
import todolistImg from "../images/pp-todolist.png";
import podcastImg from "../images/pp-podcast.png";
import neonImg from "../images/pp-neon.png";

export { fallbackImage };

export const projects = [
  {
    id: 1,
    title: "Landing Page",
    githubUrl: "https://ivpolart.github.io/LP_Gamers_Platform/",
    techStack: ["HTML", "CSS", "JS"],
    previewImage: gamesImg,
  },
  {
    id: 2,
    title: "Landing Page",
    githubUrl: "https://ivpolart.github.io/LP_Positivus/",
    techStack: ["HTML", "CSS", "JS"],
    previewImage: positivusImg,
  },
  {
    id: 3,
    title: "Landing Page",
    githubUrl: "https://github.com/ivpolart/LP_Gamers_Platform",
    techStack: ["HTML", "CSS", "JS"],
    previewImage: podcastImg,
  },
  {
    id: 4,
    title: "To do list",
    githubUrl: "https://ivpolart.github.io/To-do-List/",
    techStack: ["Vanilla JS"],
    previewImage: todolistImg,
  },
  {
    id: 5,
    title: "Landing Page",
    githubUrl: "https://ivpolart.github.io/To-do-List/",
    techStack: ["HTML", "CSS", "JS"],
    previewImage: neonImg,
  },
  {
    id: 6,
    title: "Landing Page",
    githubUrl: "https://ivpolart.github.io/LP_Sheba/",
    techStack: ["HTML", "CSS", "JS"],
    previewImage: shebaImg,
  },
];