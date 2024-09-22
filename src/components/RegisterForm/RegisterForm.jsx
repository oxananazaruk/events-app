import { Field, Formik } from "formik";
import * as Yup from "yup";
import {
  Error,
  FormInfo,
  FormTitle,
  InpWrapp,
  InputsWrapp,
  RadioTitle,
  RadioWrapp,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledRadio,
} from "./RegisterForm.styled";
import { DatePick } from "./DatePick";
import { addParticipantToEvent } from "../../services/api";

const schema = Yup.object().shape({
  fullName: Yup.string().min(3, "Too short").required("Required"),
  email: Yup.string().email("It must be valid email").required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  source: Yup.string()
    .oneOf(["social media", "friends", "found myself"])
    .required("Required"),
});

export const RegisterForm = ({ event }) => {
  const initialValues = {
    fullName: "",
    email: "",
    dateOfBirth: null,
    source: "",
  };

  const handleSubmit = async (eventId, values) => {
    try {
      const response = await addParticipantToEvent(eventId, values);

      console.log("Participant added:", response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        const formattedDate = new Date(values.dateOfBirth).toLocaleDateString(
          "en-GB"
        );
        const updatedValues = { ...values, dateOfBirth: formattedDate };
        handleSubmit(event._id, updatedValues);
        console.log("updatedValues", updatedValues);
      }}
    >
      <StyledForm autoComplete="off">
        <FormTitle>Event registration</FormTitle>
        <FormInfo>
          <h3>{event ? event.title : "Event not found"}</h3>
          <p>Date: {event ? event.eventDate : "N/A"}</p>
        </FormInfo>

        <InputsWrapp>
          <InpWrapp>
            <StyledInput type="text" name="fullName" placeholder="Full Name" />
            <Error name="fullName" component="p" />
          </InpWrapp>

          <InpWrapp>
            <StyledInput type="email" name="email" placeholder="Email" />
            <Error name="email" component="p" />
          </InpWrapp>

          <InpWrapp>
            <DatePick name="dateOfBirth" />
          </InpWrapp>
          <RadioTitle>Where did you hear about this event?</RadioTitle>
          <RadioWrapp role="group" aria-labelledby="source">
            <StyledRadio>
              <Field type="radio" name="source" value="social media" />
              Social media
            </StyledRadio>
            <StyledRadio>
              <Field type="radio" name="source" value="friends" />
              Friends
            </StyledRadio>
            <StyledRadio>
              <Field type="radio" name="source" value="found myself" />
              Found myself
            </StyledRadio>
            <Error name="source" component="p" />
          </RadioWrapp>
        </InputsWrapp>

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
};
