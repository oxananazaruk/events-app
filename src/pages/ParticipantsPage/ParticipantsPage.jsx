import { useLocation } from "react-router-dom";
import { ParticipantsList } from "../../components/ParticipantsList/ParticipantsList";
import { Container } from "./ParticipantsPage.styled";
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

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <Error />}
      <ParticipantsList event={event} participants={participants} />
    </Container>
  );
};

export default ParticipantsPage;
