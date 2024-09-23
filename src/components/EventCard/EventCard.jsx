// import {
//   EventLinks,
//   EventOrg,
//   EventText,
//   EventWrapper,
//   LinkEvent,
//   TitleName,
// } from "./EventCard.styled.js";

import { Link } from "react-router-dom";

export const EventCard = ({ event }) => {
  const { title, eventDate, description, organizer } = event;

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{eventDate}</p>
        <p>{organizer}</p>
      </div>
      <div>
        <Link to={`/registration`} state={{ event }}>
          Register
        </Link>

        <Link to={`/participants`} state={{ event }}>
          View
        </Link>
      </div>
    </div>
  );
};

// export const EventCard = ({ event }) => {
//   const { title, eventDate, description, organizer } = event;

//   return (
//     <EventWrapper>
//       <div>
//         <TitleName>{title}</TitleName>
//         <EventText>{description}</EventText>
//         <EventText>{eventDate}</EventText>
//         <EventOrg>{organizer}</EventOrg>
//       </div>
//       <EventLinks>
//         <LinkEvent to={`/registration`} state={{ event }}>
//           Register
//         </LinkEvent>

//         <LinkEvent to={`/participants`} state={{ event }}>
//           View
//         </LinkEvent>
//       </EventLinks>
//     </EventWrapper>
//   );
// };
