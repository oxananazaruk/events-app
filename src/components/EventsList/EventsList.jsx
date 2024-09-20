import events from "../../events.json";
import { EventCard } from "../EventCard/EventCard";
import { ListEvents, ListItem } from "./EventsLisr.styled";

export const EventsList = () => {
  return (
    <ListEvents>
      {events.map((event) => (
        <ListItem key={event.id}>
          <EventCard event={event} />
        </ListItem>
      ))}
    </ListEvents>
  );
};
