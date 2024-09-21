import styled from "styled-components";

export const ListPart = styled.ul`
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export const ListItem = styled.li`
  width: calc((100% - 112px) / 4);
`;

export const PartTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 20px;
  margin-top: 50px;
  text-align: center;
`;
