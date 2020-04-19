import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
`;

export const Text = styled.p`
  background: #5851DB;
  border-radius: 3px;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  padding: 30px;
  width: 250px;

  &:hover {
    background: #534dca;
  }
`;
