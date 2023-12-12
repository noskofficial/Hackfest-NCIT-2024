import React, { useState, useEffect } from 'react';
import './style.css';

interface PanelProps {
  label: string;
  content: React.ReactNode;
  activeTab: number;
  index: number;
  activateTab: () => void;
}

const Panel: React.FC<PanelProps> = ({ label, content, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const el = document.querySelector(`#panel-${index}`);
      const innerHeight = el?.querySelector('.panel__inner')?.scrollHeight || 0;
      setHeight(innerHeight);
    }, 333);

    return () => clearTimeout(timeoutId);
  }, [index]);

  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div className="panel" id={`panel-${index}`} role="tabpanel" aria-expanded={isActive}>
      <button className="panel__label" role="tab" onClick={activateTab}>
        {label}
      </button>
      <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
        <p className="panel__content">{content}</p>
      </div>
    </div>
  );
};

interface AccordionProps {
  panels: {
    label: string;
    content: React.ReactNode;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ panels }) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const activateTab = (index: number) => {
    setActiveTab((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="accordion" role="tablist">
      {panels.map((panel, index) => (
        <Panel
          key={index}
          activeTab={activeTab}
          index={index}
          {...panel}
          activateTab={() => activateTab(index)}
        />
      ))}
    </div>
  );
};

export { Accordion };
