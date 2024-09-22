import styled from "styled-components";

export const PartWrapper = styled.div`
  border: ${(p) => p.theme.border.grey};
  background-color: rgba(16, 24, 40, 0.03);
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
