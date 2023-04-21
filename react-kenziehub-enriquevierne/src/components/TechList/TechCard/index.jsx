import { StyleTechCard } from "./style";

export const TechCard = ({ tech }) => {
  return (
    <StyleTechCard>
      <p>{tech.title}</p>
      <span>{tech.status}</span>
    </StyleTechCard>
  );
};
