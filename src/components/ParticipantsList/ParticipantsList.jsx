import { ParticipantsCard } from "../ParticipantsCard/ParticipantsCard";
import { ListItem, ListPart, PartTitle } from "./ParticipantsList.styled";

export const ParticipantsList = ({ event, participants }) => {
  return (
    <>
      <PartTitle>{event.title} event participants</PartTitle>
      {participants.length > 0 ? (
        <ListPart>
          {participants.map((participant) => (
            <ListItem key={participant._id}>
              <ParticipantsCard participant={participant} />
            </ListItem>
          ))}
        </ListPart>
      ) : (
        <p>There are no participants yet...</p>
      )}
    </>
  );
};
