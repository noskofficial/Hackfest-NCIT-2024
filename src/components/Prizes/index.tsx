import React from "react";
import "./style.scss";

interface PrizeHeadingProps {
  type: string;
}

interface FirstPrizeProps {
  icon: React.ReactNode; // Adjust the type based on the actual type of your 'icon' prop
  type: string;
  content: string;
}

function PrizeHeading(props: PrizeHeadingProps) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props: FirstPrizeProps) {
  return (
    <div className="Prizes">
      {props.icon}
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export { FirstPrize, PrizeHeading };
