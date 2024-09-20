import {
  EventLinks,
  EventOrg,
  EventText,
  EventWrapper,
  LinkEvent,
  TitleName,
} from "./EventCard.styled";

export const EventCard = ({ event }) => {
  const { title, eventDate, description, organizer } = event;

  return (
    <EventWrapper>
      <div>
        <TitleName>{title}</TitleName>
        <EventText>{description}</EventText>
        <EventText>{eventDate}</EventText>
        <EventOrg>{organizer}</EventOrg>
      </div>
      <EventLinks>
        <LinkEvent to="/registration">Register</LinkEvent>
        <LinkEvent to="/participants">View</LinkEvent>
      </EventLinks>
    </EventWrapper>
  );
};
