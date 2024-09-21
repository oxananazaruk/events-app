import { useLocation } from "react-router-dom";
import { ParticipantsCard } from "../ParticipantsCard/ParticipantsCard";
import { ListItem, ListPart, PartTitle } from "./ParticipantsList.styled";

export const ParticipantsList = () => {
  const location = useLocation();
  const { event } = location.state || {};
  return (
    <>
      <PartTitle>"{event.title}" event participants</PartTitle>
      {event.participants.length > 0 ? (
        <ListPart>
          {event.participants.map((participant) => (
            <ListItem key={participant.name}>
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
