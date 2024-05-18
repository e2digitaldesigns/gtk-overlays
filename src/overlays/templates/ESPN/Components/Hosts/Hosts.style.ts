import styled, { keyframes } from "styled-components";

interface IntHostBoxWrapper {
  position: number;
}

const hostBoxPosition = (position: number) => {
  if (position === 1) return "left: 10px;";
  if (position === 2) return "left: 1275px;";
  if (position === 3) return "right: 10px;";
};

export const HostBoxWrapper = styled.div<IntHostBoxWrapper>`
  position: absolute;
  top: 250px;
  width: 315px;
  height: 400px;
  ${props => hostBoxPosition(props.position)};
`;

export const NameTag = styled.div`
  width: 295px;
  height: 40px;
  font-size: 1.125rem;
  text-transform: uppercase;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.bg1};
  border-right: 3px solid ${props => props.theme.colors.accent1};

  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 50;
`;

export const VoteCount = styled.div`
  width: 65px;
  height: 40px;

  font-size: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.bg1};

  border-bottom: 3px solid ${props => props.theme.colors.accent1};

  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 50;
`;

export const HostBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  border: 2px solid #1c1b29;
`;
