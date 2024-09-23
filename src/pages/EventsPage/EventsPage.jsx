import { useEffect, useState } from "react";
import { EventsList } from "../../components/EventsList/EventsList";
import {
  Container,
  EndText,
  SortSelect,
  SortTitle,
  SortWrapper,
} from "./EventsPage.styled";
import { fetchAllEvents } from "../../services/api";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

const EventsPage = () => {
  const [eventsItems, setEventsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sortBy, setSortBy] = useState("");

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

  const sortEvents = (events, sortBy) => {
    switch (sortBy) {
      case "title":
        return events.sort((a, b) => a.title.localeCompare(b.title));
      case "eventDate":
        return events.sort(
          (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
        );
      case "organizer":
        return events.sort((a, b) => a.organizer.localeCompare(b.organizer));
      default:
        return events;
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedEvents = sortEvents([...eventsItems], sortBy);

  return (
    <Container>
      <SortWrapper>
        <SortTitle htmlFor="sort">Sort by: </SortTitle>
        <SortSelect id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="eventDate">Event Date</option>
          <option value="organizer">Organizer</option>
        </SortSelect>
      </SortWrapper>

      {isLoading && <Loader />}
      {error && <Error />}
      {sortedEvents.length > 0 && <EventsList events={sortedEvents} />}
      {!hasMore && <EndText>No more events to load</EndText>}
    </Container>
  );
};

export default EventsPage;
