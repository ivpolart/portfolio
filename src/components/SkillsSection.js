import { useState, useRef, useEffect } from "react";
import AccordionItem from "./AccordionItem"; 

const SkillsSection = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="skills-section">
      <div className="container">
        <div className="title-block">
          <h3>What Can I am?</h3>
        </div>
        <div className="accordion-block">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isActive={activeIndex === index}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
