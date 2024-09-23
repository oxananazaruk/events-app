import { ParticipantsCard } from "../ParticipantsCard/ParticipantsCard";
import { ListItem, ListPart } from "./ParticipantsList.styled";

export const ParticipantsList = ({ participants }) => {
  return (
    <ListPart>
      {participants.map((participant) => (
        <ListItem key={participant._id}>
          <ParticipantsCard participant={participant} />
        </ListItem>
      ))}
    </ListPart>
  );
};
