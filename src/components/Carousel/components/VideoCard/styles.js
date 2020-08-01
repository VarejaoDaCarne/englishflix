import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-radius: 6px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: .4s;


  > span {
    visibility: hidden;


  }

  &:hover,
  &:focus {
    opacity: .8;

    > span {
      visibility: visible;
      color: white;
      border-radius: 3px;
      font-size: 14px;
      position: absolute;
      bottom: 0;
      left: 50%;
      text-align: center;
      transition-delay: .3s;
      transform: translate(-50%, 0);
      white-space: pre-wrap;
      width: 100%;
      background: rgba(0,0,0, .7);
      padding: 10px;
      box-sizing: border-box;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (min-width: 720px) {
    &:hover {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
      width: 350px;
    }
  }
`;