import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 110;
  display: flex;
  min-height: 84px;
  padding: 24px;
  background-color: rgba(16, 24, 40, 0.8);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderContainer = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 50%;

  transform: translateX(-50%);
`;

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
`;

export const HeaderTitle = styled.h2`
  color: ${(p) => p.theme.color.main};
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  padding: 8px 16px;
  min-width: 132px;
  text-align: center;
  color: #fff;
  border-bottom: 1px solid transparent;
  transition: color 0.3s, border-bottom 0.3s;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.color.buttons};
    border-bottom: ${(p) => p.theme.border.blue};
  }
`;
