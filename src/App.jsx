import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy } from "react";

const EventsPage = lazy(() => import("../src/pages/EventsPage/EventsPage"));
const RegistrationPage = lazy(() =>
  import("../src/pages/RegistrationPage/RegistrationPage")
);
const ParticipantsPage = lazy(() =>
  import("../src/pages/ParticipantsPage/ParticipantsPage")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EventsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
        <Route path="*" element={<EventsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
