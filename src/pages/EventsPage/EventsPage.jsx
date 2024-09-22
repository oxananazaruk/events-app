import { useEffect, useState } from "react";
import { EventsList } from "../../components/EventsList/EventsList";
import { Container } from "./EventsPage.styled";
import { fetchAllEvents } from "../../services/api";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

const EventsPage = () => {
  const [eventsItems, setEventsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getEvents() {
      try {
        setIsLoading(true);
        setError(false);
        const allEvents = await fetchAllEvents();
        setEventsItems(allEvents);
      } catch (error) {
        console.log(error.message);

        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getEvents();
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <Error />}
      {eventsItems.length > 0 && <EventsList events={eventsItems} />}
    </Container>
  );
};

export default EventsPage;
