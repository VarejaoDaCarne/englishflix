import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: rgb(10, 10, 10);
  border-top: 2px solid white;
  padding: 18px 12px;
  position: relative;
  color: var(--white);
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
