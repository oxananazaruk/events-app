import { NavLink } from "react-router-dom";
import { EventWrapper } from "./eventCard.styled";

export const EventCard = ({ event }) => {
  const { title, eventDate, description, organizer } = event;

  return (
    <EventWrapper>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{eventDate}</p>
      <p>{organizer}</p>
      <NavLink to="/registration">Register</NavLink>
      <NavLink to="/participants">View</NavLink>
    </EventWrapper>
  );
};
