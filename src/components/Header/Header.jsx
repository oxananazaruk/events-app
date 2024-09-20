import {
  HeaderContainer,
  HeaderTitle,
  NavHeader,
  Navigation,
  StyledLink,
  TitleWrapp,
} from "./Header.styled";

export const Header = () => {
  return (
    <NavHeader>
      <HeaderContainer>
        <TitleWrapp>
          <HeaderTitle>Events planner</HeaderTitle>
          <Navigation>
            <StyledLink to="/">Events</StyledLink>
          </Navigation>
        </TitleWrapp>
      </HeaderContainer>
    </NavHeader>
  );
};
