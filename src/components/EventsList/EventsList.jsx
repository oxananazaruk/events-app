import { EventCard } from "../EventCard/EventCard";
import { ListEvents, ListItem } from "./EventsList.styled";

export const EventsList = ({ events }) => {
  return (
    <ListEvents>
      {events.map((event) => (
        <ListItem key={event._id}>
          <EventCard event={event} />
        </ListItem>
      ))}
    </ListEvents>
  );
};
