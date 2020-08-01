import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: rgb(10, 10, 10);
  border-top: 2px solid white;
  padding: 5px 5px;
  position: relative;
  color: var(--white);
  text-align: center;

  & img {
    width: 45px;
    opacity: .6;
  }
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
