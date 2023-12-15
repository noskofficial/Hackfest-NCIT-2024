import React, { useState, useEffect, ReactNode, CSSProperties } from 'react';
import './style.css';

interface PanelProps {
  label: string;
  content: ReactNode;
  activeTab: number;
  index: number;
  activateTab: () => void;
}

interface AccordionProps {
  panels: PanelProps[];
}

const Panel: React.FC<PanelProps> = ({
  label,
  content,
  activeTab,
  index,
  activateTab,
}) => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const el = document.querySelector('.panel__inner');
    const newHeight = el?.scrollHeight || 0;
    setHeight(newHeight);
  }, [content]);

  const isActive = activeTab === index;
  const innerStyle: CSSProperties = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <button className="panel__label" role="tab" onClick={activateTab}>
        {label}
      </button>
      <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
        <p className="panel__content">{content}</p>
      </div>
    </div>
  );
};

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
          {...panel}
          activeTab={activeTab}
          index={index}
          activateTab={() => activateTab(index)}
        />
      ))}
    </div>
  );
};

export { Accordion };
