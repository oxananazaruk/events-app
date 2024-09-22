import sprite from "/sprite.svg";
import {
  StyledDatePicker,
  ErrorDate,
  IconCalendar,
} from "./RegisterForm.styled";
import "react-datepicker/dist/react-datepicker.css";
import enGB from "date-fns/locale/en-GB";
import { useField } from "formik";

export const DatePick = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (dateOfBirth) => {
    helpers.setValue(dateOfBirth);
  };

  return (
    <>
      <StyledDatePicker
        {...field}
        {...props}
        selected={field.value}
        onChange={handleChange}
        dateFormat="dd-MM-yyyy"
        placeholderText="Date of birth"
        locale={enGB}
        weekStartsOn={1}
        weekdaysShort={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
      />
      {meta.touched && meta.error ? <ErrorDate>{meta.error}</ErrorDate> : null}

      <IconCalendar>
        <use href={`${sprite}#calendar`} />
      </IconCalendar>
    </>
  );
};
