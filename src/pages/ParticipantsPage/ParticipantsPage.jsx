import { useLocation } from "react-router-dom";
import { ParticipantsList } from "../../components/ParticipantsList/ParticipantsList";
import {
  Container,
  FilterWrapper,
  PartFilter,
  PartTitle,
} from "./ParticipantsPage.styled";
import { useEffect, useState } from "react";
import { fetchParticipants } from "../../services/api";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

const ParticipantsPage = () => {
  const location = useLocation();
  const { event } = location.state || {};

  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Додаємо стан для пошуку
  const [filteredParticipants, setFilteredParticipants] = useState([]);

  useEffect(() => {
    async function getParticipants() {
      try {
        setIsLoading(true);
        setError(false);
        const allParticipants = await fetchParticipants(event._id);
        setParticipants(allParticipants);
      } catch (error) {
        console.log(error.message);

        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getParticipants();
  }, [event._id]);

  useEffect(() => {
    const filtered = participants.filter((participant) => {
      const fullName = `${participant.fullName}`.toLowerCase();
      return (
        fullName.includes(searchQuery.toLowerCase()) ||
        participant.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    setFilteredParticipants(filtered);
  }, [searchQuery, participants]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <PartTitle>{event.title} event participants</PartTitle>
      <FilterWrapper>
        <PartFilter
          type="text"
          placeholder="Search by full name or email"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </FilterWrapper>

      {isLoading && <Loader />}
      {error && <Error />}
      {filteredParticipants.length > 0 ? (
        <ParticipantsList participants={filteredParticipants} />
      ) : (
        <p>No participants found...</p>
      )}
    </Container>
  );
};

export default ParticipantsPage;
