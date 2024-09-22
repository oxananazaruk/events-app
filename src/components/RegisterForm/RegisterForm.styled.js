import { ErrorMessage, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 648px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  min-width: 648px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 20px;
  text-align: center;
`;

export const FormInfo = styled.div`
  margin-bottom: 20px;
`;

export const InpWrapp = styled.div`
  position: relative;
`;

export const RadioTitle = styled.p`
  margin-top: 20px;
`;

export const RadioWrapp = styled.div`
  position: relative;
  margin-top: 8px;
  display: flex;
  gap: 16px;
`;

export const StyledInput = styled(Field)`
  display: block;
  width: 100%;
  height: 56px;
  padding: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: ${(p) => p.theme.color.inputs};
  color: rgba(16, 24, 40, 0.6);
`;

export const StyledRadio = styled.label`
  display: flex;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  margin: 4px;
  position: absolute;
  bottom: -40%;
  right: 0;
`;
export const ErrorDate = styled.p`
  color: red;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  margin: 4px;
  position: absolute;
  bottom: -40%;
  right: 0;
`;

export const InputsWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-bottom: 54px;
`;

export const StyledButton = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  border: none;
  background-color: ${(p) => p.theme.color.buttons};
  text-align: center;

  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.theme.color.main};
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  display: block;
  width: 598px;
  height: 56px;
  padding: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: ${(p) => p.theme.color.inputs};
  color: rgba(16, 24, 40, 0.6);
  position: relative;
`;

export const IconCalendar = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const RegTitle = styled.p`
  font-weight: 400;
  font-size: 26px;
  line-height: 1.25;
  margin-top: 20px;
  text-align: center;
`;
