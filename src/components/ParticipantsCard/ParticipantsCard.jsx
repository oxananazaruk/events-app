import { PartWrapper } from "./ParticipantsCard.styled";

export const ParticipantsCard = ({ participant }) => {
  return (
    <PartWrapper>
      <p>{participant.fullName}</p>
      <p>{participant.email}</p>
    </PartWrapper>
  );
};
