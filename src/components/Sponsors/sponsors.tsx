import { SOCIALS } from "../../Module/General";
import { Btn } from "../Landing";
import "./sponsors.scss";

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

export interface SponsorProps {
  srcx: string;
  src?: string;
}

function Sponsor(props: SponsorProps) {
  return (
    <div className="Sponsor">
      <img src={props.srcx} alt="HackFest NCIT 2024"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring </h3>
      <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>{" "}
    </div>
  );
}

export { SponsorsHead, Sponsor, SponsorUS };
