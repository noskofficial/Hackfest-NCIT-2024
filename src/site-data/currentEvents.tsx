import { currentEvents } from "../Module/General";

// import { MdxContent } from "../containers/Mdx";

// import Content from "./content.mdx";

const CurrentEventsItem = ({ info }: { info: any }) => {
  const { img, img_alt, name, desc, location, contact } = info;

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr", // Adjust the column widths as needed
    gap: "15px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    margin: "10px",
    padding: "10px",
    maxWidth: "600px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  };
  //   console.log(Content);

  return (
    <div style={containerStyle}>
      <img src={img} alt={img_alt} style={imgStyle} />
      <div>
        <h3 style={{ marginBottom: "8px" }}>{name}</h3>
        <p style={{ marginBottom: "8px" }}>{desc}</p>
        <p style={{ marginBottom: "8px" }}>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Contact:</strong> {contact}
        </p>
      </div>
    </div>
  );
};

export const CurrentEvents = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {currentEvents.map((info) => (
        <CurrentEventsItem key={info.id} info={info} />
      ))}
    </div>
  );
};
