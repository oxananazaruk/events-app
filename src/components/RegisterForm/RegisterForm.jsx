import { Field, Formik } from "formik";
import * as Yup from "yup";
import {
  Error,
  FormTitle,
  InpWrapp,
  InputsWrapp,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./RegisterForm.styled";
import { DatePick } from "./DatePick";

const schema = Yup.object().shape({
  fullName: Yup.string().min(3, "Too short").required("Required"),
  email: Yup.string().email("It must be valid email").required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  source: Yup.string()
    .oneOf(["social media", "friends", "found myself"])
    .required("Required"),
});

export const RegisterForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    dateOfBirth: null,
    source: "",
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
        // handleSubmit(updatedValues);
        console.log("updatedValues", updatedValues);
      }}
    >
      <StyledForm autoComplete="off">
        <FormTitle>Event registration</FormTitle>

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

          <div role="group" aria-labelledby="source">
            <label>
              <Field type="radio" name="source" value="social media" />
              Social media
            </label>
            <label>
              <Field type="radio" name="source" value="friends" />
              Friends
            </label>
            <label>
              <Field type="radio" name="source" value="found myself" />
              Found myself
            </label>
            <Error name="source" component="p" />
          </div>
        </InputsWrapp>

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
};
