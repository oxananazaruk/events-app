import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const SortWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const SortTitle = styled.label`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
`;

export const SortSelect = styled.select`
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
  border: ${(p) => p.theme.border.grey};
  color: ${(p) => p.theme.color.text};
  width: 200px;
  &:focus {
    outline: none;
    border: ${(p) => p.theme.border.blue};
  }
`;

export const EndText = styled.p`
  margin-top: 20px;
  text-align: center;
`;
