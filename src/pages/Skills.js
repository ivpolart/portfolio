import SkillsSection from "../components/SkillsSection"
import TechnologySection from "../components/TechnologySection"
import { technologies } from "../data/technologyImages";

const accordionItems = [
  {
    title: "Front-end Development",
    content: (
      <ul>
        <li>Pixel-perfect, responsive websites with HTML, CSS, JS, jQuery</li>
        <li>Interactive interfaces with React and Vanilla JS</li>
        <li>Gulp, Webpack for optimizing workflows</li>
      </ul>
    ),
  },
  {
    title: "CMS & Website Management",
    content: (
      <ul>
        <li>Create and maintain websites using WordPress, HubSpot, Marketo, and Pardot</li>
        <li>Adapt designs and content within popular CMS environments</li>
      </ul>
    ),
  },
  {
    title: "Email Development",
    content: (
      <ul>
        <li>Design and code email templates optimized for all major email clients</li>
        <li>Ensure mobile and client compatibility using responsive email techniques</li>
      </ul>
    ),
  },
  {
    title: "Design & Tools",
    content: (
      <ul>
        <li>Work with design assets from Figma, Photoshop, and Adobe Illustrator</li>
        <li>Confidently use various IDEs and code editors to suit different development needs</li>
      </ul>
    ),
  },
  {
    title: "Backend Basics & Data",
    content: (
      <ul>
        <li>Apply basic Node.js for backend tasks or API integrations</li>
        <li>Understand and work with SQL and NoSQL databases at a basic level</li>
      </ul>
    ),
  },
  {
    title: "Teamwork & Project Delivery",
    content: (
      <ul>
        <li>Collaborate effectively in development teams</li>
        <li>Deliver production-ready code in commercial environments</li>
      </ul>
    ),
  },
];

const Skills = () => {
    return (
        <>
            <SkillsSection items={accordionItems} />
            <TechnologySection items={technologies} />
        </>
    )
}

export default Skills;
