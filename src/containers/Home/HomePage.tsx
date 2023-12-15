import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Logo, LogoSectionAbout } from "../../components/About/index";
import { Accordion, PanelProps } from "../../components/Accordian/index";
import Birds from "../../components/Animation";
import Footer from "../../components/Footer/index";
import { Myinfo } from "../../components/Landing/index";
import {
  FirstPrize,
  PrizeHeading,
  FirstPrizeProps,
} from "../../components/Prizes/index";
import Media from "../../components/Socials/index";
import {
  Sponsor,
  SponsorsHead,
  SponsorUS,
} from "../../components/Sponsors/sponsors";
import { JoinTeam, Member } from "../../components/Team";
import {
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION,
} from "../../Module/General";
import MyCalender from "../calender";
import "./about.css";
import pattern from "./assets/pattern4.png";
import { UseMedia } from "../../hooks/useMedia";

interface SponsorGroupProps {
  src?: string;
}

const SponsorGroup: React.FC<{
  sponsors: SponsorGroupProps[];
  index: number;
}> = ({ sponsors, index }) => {
  return (
    <Row key={index}>
      {sponsors.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          <Sponsor srcx={s?.src || ""} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group
const PrizeGroup: React.FC<{ prizes: FirstPrizeProps[]; index: number }> = ({
  prizes,
  index,
}) => {
  return (
    <Row key={index}>
      {prizes.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

interface TeamMembersProps {
  Name: string;
  role: string;
  github: string;
  linkedin: string;
  img: string;
}
// Prize group ending
const TeamMembers: React.FC<{ members: TeamMembersProps[] }> = ({
  members,
}) => {
  return (
    <Row className="members">
      {members.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

const FrequentlyAsked: React.FC<{ panels: PanelProps[][]; index: number }> = ({
  panels,
  index,
}) => {
  return (
    <Row key={index} className="sf">
      {panels.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia("min-width", 1000, setMedia);

  return (
    <div className="Whole_div" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={5}>
              <MyCalender />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map((panels, index) => (
            <FrequentlyAsked key={index} index={index} panels={panels} />
          ))}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map((prizes, index) => (
            <PrizeGroup key={index} index={index} prizes={prizes} />
          ))}
        </Row>
        {/* ********Prizes ending here ***** */}

        <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>coming soon</h2>
        </Row>

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map((sponsers, index) => (
            <SponsorGroup key={index} index={index} sponsors={sponsers} />
          ))}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Team here ***** */}
        <h1 id="team">Our Team</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM.src}
            content="Interested in joining our team"
          />
        )}
        {TeamInfo.map((members, index) => (
          <TeamMembers key={index} members={members} />
        ))}
        {/* ********Team ending here ***** */}

        {/* ********Judges here ***** */}

        <h1 id="team">Judges</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={TOP_SECTION.JUDGES_FORM_LINK}
            content="Interested in being judge"
          />
        )}
        {JudgesInfo.map((members, index) => (
          <TeamMembers key={index} members={members} />
        ))}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
