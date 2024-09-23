import styled from "styled-components";
import { Link } from "react-router-dom";

export const EventWrapper = styled.div`
  border: ${(p) => p.theme.border.grey};
  background-color: rgba(16, 24, 40, 0.03);
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleName = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const EventText = styled.p`
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EventOrg = styled.p`
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  margin-top: 12px;
`;

export const EventLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const LinkEvent = styled(Link)`
  color: ${(p) => p.theme.color.buttons};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.color.main};
    border-bottom: ${(p) => p.theme.border.blue};
  }
`;
