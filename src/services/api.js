import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export const fetchAllEvents = async () => {
  try {
    const response = await axios.get(`events/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchParticipants = async (eventId) => {
  try {
    const response = await axios.get(`participants/${eventId}`);
    console.log("response.data", response.data);

    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const addParticipantToEvent = async (eventId, participantData) => {
  try {
    const response = await axios.post(
      `participants/${eventId}`,
      participantData
    );

    console.log("Participant added:", response.data);

    return response.data;
  } catch (error) {
    console.error(
      "Error adding participant:",
      error.response ? error.response.data : error.message
    );
  }
};
