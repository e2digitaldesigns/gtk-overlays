import styled from "styled-components";

interface IntHost2UpWrapper {
  position: number;
}

const HostWrapperDefault = styled.div`
  position: absolute;
  width: 1300px;
  height: 700px;
  left: 105px;
  top: 20px;

  border: 1px solid ${props => props.theme.colors.accent1};
  z-index: 10;
`;

export const Host1Up = styled(HostWrapperDefault)``;

export const Host2Up = styled(HostWrapperDefault)<IntHost2UpWrapper>`
  width: 640px;
  left: ${props => (props.position === 1 ? "105px" : "765px")};
`;

export const NameTag = styled.div`
  width: 425px;
  height: 40px;
  font-size: 1.25rem;
  text-transform: uppercase;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.accent1};
  border-right: 3px solid ${props => props.theme.colors.border};

  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 50;

  display: flex;
  align-items: center;
`;

export const VoteCount = styled.div`
  width: 65px;
  height: 40px;

  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.accent1};

  border-bottom: 3px solid ${props => props.theme.colors.border};

  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 50;
`;
