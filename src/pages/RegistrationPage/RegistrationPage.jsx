import { useLocation } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Container } from "./RegistrationPage.styled";

const RegistrationPage = () => {
  const location = useLocation();
  const { event } = location.state || {};

  return (
    <Container>
      <RegisterForm event={event} />
    </Container>
  );
};

export default RegistrationPage;
