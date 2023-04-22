import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SignInSection = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Registered = styled.div`
  display: flex;
`;

export const Text = styled.p`
  margin-right: 5px;
  font-size: 11px;
  color: #1976d2;
`;

export const Link = styled(NavLink)`
  color: #1976d2;
  font-size: 11px;
`;
