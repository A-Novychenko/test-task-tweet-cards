import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  width: 1268px;
`;

export const Header = styled.header`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #5736a3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;
export const Nav = styled.nav`
  display: flex;
  gap: 32px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 12px;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: white;
    box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
    -webkit-box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
    -moz-box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
  }
`;
