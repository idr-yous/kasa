import React, { useState, useRef } from "react";
import chevron from "../assets/static/chevron.svg";

export default function Collapse({ title, content }) {
  /// initial state of the collapse
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(0);

  ///
  const contentCollapse = useRef(null);

  // toggles collapse by changing states
  const toggleCollapse = () => {
    setActive(!active);
    setHeight(active ? 0 : contentCollapse.current.scrollHeight);
  };

  // check if collapse content is a list
  const collapseContent = [];
  if (Array.isArray(content)) {
    content.map((item, index) =>
      collapseContent.push(<span key={index}>{item}</span>)
    );
  } else {
    collapseContent.push(content);
  }

  return (
    <div className="collapse-section">
      <button
        className={`collapse ${active ? "active" : ""}`}
        onClick={toggleCollapse}
      >
        <span className="collapse-title">{title}</span>
        <img
          src={chevron}
          className={active ? "collapse-icon" : "collapse-icon rotate"}
          alt={title}
        />
      </button>
      <div
        ref={contentCollapse}
        className="collapse-content"
        style={{ maxHeight: `${height}px` }}
      >
        <div className="collapse-text">{collapseContent}</div>
      </div>
    </div>
  );
}
