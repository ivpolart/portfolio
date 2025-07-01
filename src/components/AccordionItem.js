import { useRef, useEffect, useState } from "react";

const AccordionItem = ({ item, index, isActive, toggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isActive && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isActive]);

  return (
    <div className={`open-block${isActive ? " active" : ""}`}>
      <span className="opener" onClick={() => toggle(index)}>
        {item.title}
      </span>
      <div className="slide-wrapper" style={{
            height,
            overflow: "hidden",
            transition: "height 0.3s ease"
        }} ref={contentRef}>
            <div className="slide">
            {item.content}
            </div>
        </div>
    </div>
  );
};

export default AccordionItem;