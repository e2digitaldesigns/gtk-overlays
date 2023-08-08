import styled, { keyframes } from "styled-components";

const fadeOutAnimation = keyframes`
  0% { opacity: .9; }
  100% { opacity: 0; top: 500px; }
`;

interface HostProps {
  seat: number;
}

export const HostWrapper = styled.div<HostProps>`
  width: 400px;
  height: 40px;

  display: grid;
  grid-template-columns: 50px auto;

  position: absolute;
  top: 750px;
  left: ${props => (props.seat === 1 ? "20px" : "785px")};
`;

export const HostWrapper3 = styled.div<HostProps>`
  width: 400px;
  height: 40px;

  display: grid;
  grid-template-columns: 50px auto;

  position: absolute;
  top: 750px;
  left: ${props =>
    props.seat === 1 ? "20px" : props.seat === 2 ? "544px" : "1030px"};
`;

export const Vote = styled.div`
  width: 100%;
  height: 100%;

  font-size: 1.25rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.accent1};
`;

export const Host = styled.div`
  width: 100%;
  height: 100%;

  font-size: 1.25rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  overflow: hidden;

  background-color: ${props => props.theme.colors.scrollBackground};

  &:before {
    position: absolute;
    content: "";
    inset: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0) 60%
    );
  }
`;

interface IFloaterProps {
  seat: string;
}

export const Floater = styled(HostWrapper)<IFloaterProps>`
  z-index: 0;
  color: #fff;

  left: ${props =>
    props.seat === "1"
      ? "20px"
      : props.seat === "22"
      ? "785px"
      : props.seat === "23"
      ? "785px"
      : props.seat === "32"
      ? "530px"
      : "1040px"};

  background-color: ${props => props.theme.colors.scrollBackground};
  animation: ${fadeOutAnimation} 3s ease-in forwards;
`;
