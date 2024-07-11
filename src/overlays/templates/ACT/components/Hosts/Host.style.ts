import styled from "styled-components";

interface IntHostBoxWrapper {
  position: number;
}

const hostBoxPosition = (position: number) => {
  if (position === 1) return "left: 10px;";
  if (position === 2) return "left: 490px;";
  if (position === 3) return "left: 970px;";
  if (position === 4) return "right: 10px;";
};

export const HostBoxWrapper = styled.div<IntHostBoxWrapper>`
  position: absolute;
  bottom: 350px;
  width: 460px;
  height: 460px;
  ${props => hostBoxPosition(props.position)};
  border: 3px solid ${props => props.theme.colors.accent2};
`;

export const NameTag = styled.div`
  width: 350px;
  height: 50px;
  font-size: 1.25rem;
  text-transform: uppercase;
  padding: 0 0.625rem 0 1rem;
  background-color: ${props => props.theme.colors.accent1};
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.accent3} 0%,
    ${props => props.theme.colors.accent1} 50%
  );
  border: 2px solid ${props => props.theme.colors.accent2};
  border-width: 2px 8px 2px 2px;
  box-shadow: inset 3px 4px 5px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: -30px;
  left: 25px;
  z-index: 50;
  transform: skew(-30deg);
  > * {
    transform: skew(30deg);
  }
`;

export const VoteCount = styled.div`
  width: 160px;
  height: 40px;

  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 1rem 0 0.625rem;
  background-color: ${props => props.theme.colors.accent1};

  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 45;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -20px;
    width: 40px;
    height: 40px;
    transform: skew(-30deg);
    background-color: ${props => props.theme.colors.accent1};
    z-index: 40;
  }

  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: -100px;
    width: 80px;
    height: 40px;
    transform: skew(-30deg);
    background-color: ${props => props.theme.colors.bg1};
    z-index: 35;
  }
`;

export const FireWrapper = styled.div`
  width: 100%;
  height: 330px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
`;
