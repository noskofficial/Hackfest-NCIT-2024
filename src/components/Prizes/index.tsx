import "./style.scss";

function PrizeHeading(props: { type: string }) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}
export interface FirstPrizeProps {
  icon?: JSX.Element;
  type?: string;
  content?: string;
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
