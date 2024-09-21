import { PartWrapper } from "./ParticipantsCard.stylel";

export const ParticipantsCard = ({ participant }) => {
  return (
    <PartWrapper>
      <p>{participant.fullName}</p>
      <p>{participant.email}</p>
    </PartWrapper>
  );
};
