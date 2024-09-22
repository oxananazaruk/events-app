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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function getEvents() {
      try {
        setIsLoading(true);
        setError(false);
        const allEvents = await fetchAllEvents(page);

        if (allEvents.length < 9) {
          setHasMore(false);
        }

        setEventsItems((prevItems) => {
          const newEvents = allEvents.filter(
            (newEvent) =>
              !prevItems.some((prevEvent) => prevEvent._id === newEvent._id)
          );

          return [...prevItems, ...newEvents];
        });
      } catch (error) {
        console.log(error.message);

        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getEvents();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop <
          document.documentElement.offsetHeight - 20 ||
        isLoading ||
        !hasMore
      ) {
        return null;
      }

      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <Error />}
      {eventsItems.length > 0 && <EventsList events={eventsItems} />}
      {!hasMore && <p>No more events to load</p>}
    </Container>
  );
};

export default EventsPage;
