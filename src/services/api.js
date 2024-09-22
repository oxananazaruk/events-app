import axios from "axios";

axios.defaults.baseURL = "https://events-be-v7ja.onrender.com/api";

export const fetchAllEvents = async (page, limit = 9) => {
  const response = await axios.get(`events/`, {
    params: {
      page: page,
      limit: limit,
    },
  });
  return response.data;
};

export const fetchParticipants = async (eventId) => {
  const response = await axios.get(`participants/${eventId}`);

  return response.data;
};

export const addParticipantToEvent = async (eventId, participantData) => {
  const response = await axios.post(`participants/${eventId}`, participantData);

  return response.data;
};
