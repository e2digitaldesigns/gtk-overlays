import styled from "styled-components";

interface IntHostBoxWrapper {
  position: number;
}

const hostBoxPosition = (position: number) => {
  if (position === 1) return "left: 10px;";
  if (position === 2) return "left: 1230px;";
  if (position === 3) return "right: 10px;";
};

export const HostBoxWrapper = styled.div<IntHostBoxWrapper>`
  position: absolute;
  top: 240px;
  width: 335px;
  height: 420px;
  z-index: 15;
  ${props => hostBoxPosition(props.position)};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.35);
`;

export const HostBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  border: 2px solid ${props => props.theme.colors.accent1};
  background-color: green;
`;

export const NameTag = styled.div`
  width: calc(100% - 20px);
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
