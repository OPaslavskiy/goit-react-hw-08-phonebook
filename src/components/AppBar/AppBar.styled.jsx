import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  padding: 15px;
  padding-left: 64px;
  padding-right: 64px;
  justify-content: space-between;
  background-color: #2c3e50;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SignIn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LinkSignIn = styled.a`
  color: #fff;
`;

export const Link = styled(NavLink)`
  color: #fff;
  margin-left: 4px;
  margin-right: 4px;
`;
