import styled, { keyframes } from 'styled-components';

const zoom = keyframes`
  100% {
    transform: scale(1.3);
  }
`;

const cycleImages = keyframes`
  25% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
`;

export const Slideshow = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const SlideshowItem = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  opacity: 0;
  animation: ${cycleImages} 31s infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${zoom} 30s infinite;
  }
`;

export const SlideshowItemText = styled.div`
  max-width: 40%;
  position: absolute;
  top: 70%;
  left: 0;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 5rem 10rem 5rem 3rem;
  h5 {
    font-size: 4rem;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 3px;
    margin-bottom: 2.5rem;
  }
  p {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    font-weight: 300;
  }
  ul {
    list-style: none;
    display: flex;
    margin-top: 10px;
  }
  li {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }
  svg {
    margin-right: 8px;
  }
  @media screen and (max-width: 1000px) {
    max-width: 80%;
    padding: 5rem 1rem;
    h5 {
      font-size: 3rem;
    }
    p{
      font-size: 1.4rem
    }
    svg{
      width: 24px;
    }
  }
  @media screen and (max-width: 767px){
    max-width: 100%;
    padding: 2rem;
    top: initial;
    bottom: 5px;
    transform: initial;
    h5{
      font-size: 2rem;
    }
    p{
      margin-top: -3px;
      font-size: 1.0rem;
    }
    svg{
      width: 16px;
    }
  }
`;
