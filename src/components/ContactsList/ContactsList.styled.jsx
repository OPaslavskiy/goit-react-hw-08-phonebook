import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 650px;
  max-height: 650px; /* обмежити висоту */
  overflow: auto; /* додати скролл */

  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bfbfbf;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a0;
  }

  background-color: #f7f7f7;
  /* justify-content: start;
  align-items: flex-end; */
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

export const Btn = styled.button`
  border-radius: 20px;
  width: 100px;
  border-color: #c5c7c9;
  padding: 5px;
  :hover,
  :focus {
    background-color: #bfbfcc;
    color: #ec5858;
  }
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
