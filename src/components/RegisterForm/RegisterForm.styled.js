import { ErrorMessage, Field, Form } from 'formik';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  min-height: 532px;
`;

export const FormTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 8px;
`;

export const FormText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.text};
  margin-bottom: 24px;
`;

export const InpWrapp = styled.div`
  position: relative;
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

export const StyledTextarea = styled(Field)`
  display: block;
  width: 100%;
  height: 114px;
  padding: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: ${(p) => p.theme.color.inputs};
  color: rgba(16, 24, 40, 0.6);
  resize: none;
`;

export const Error = styled(ErrorMessage)`
  color: ${(p) => p.theme.color.buttons};
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  margin: 4px;
  position: absolute;
  bottom: -40%;
  right: 0;
`;
export const ErrorDate = styled.p`
  color: ${(p) => p.theme.color.buttons};
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
  gap: 16px;
  margin-bottom: 24px;
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
  width: 398px;
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