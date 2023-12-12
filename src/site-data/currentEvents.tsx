import { events_info } from "./edit__this___file";
import styled from "styled-components";

const currentEvents = events_info;

// import { MdxContent } from "../containers/Mdx";

// import Content from "./content.mdx";

const StyledCurrentEventsItem = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const Description = styled.p`
  margin-bottom: 8px;
  overflow: auto;
  max-height: 100px;
  width: 100%;
  word-wrap: break-word;
  white-space: normal;
`;
const CurrentEventsItem = ({ info }: { info: any }) => {
  const { img, img_alt, name, desc, location, contact } = info;

  return (
    <StyledCurrentEventsItem>
      <Img src={img} alt={img_alt} />
      <div>
        <h3 style={{ marginBottom: "8px" }}>{name}</h3>
        <Description>{desc}</Description>
        <p style={{ marginBottom: "8px" }}>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Contact:</strong> {contact}
        </p>
      </div>
    </StyledCurrentEventsItem>
  );
};

export const CurrentEvents = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        padding: "30px",
      }}
    >
      {currentEvents.map((info) => (
        <CurrentEventsItem key={info.id} info={info} />
      ))}
    </div>
  );
};
