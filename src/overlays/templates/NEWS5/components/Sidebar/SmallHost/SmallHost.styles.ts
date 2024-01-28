import styled from "styled-components";

export const SmallHostWrapper = styled.div<{ showHost: boolean }>`
  position: absolute;
  top: 175px;
  left: 0px;
  width: 610px;
  height: 345px;

  background-color: ${props =>
    props.showHost ? "transparent" : props.theme.colors.bg1};

  opacity: ${props => (props.showHost ? 1 : 0)};
  transition: all 1s ease-in-out;
`;

export const VoteDisplay = styled.div`
  width: 60px;
  height: 35px;
  font-size: 1.25rem;

  position: absolute;
  top: 245px;
  left: 15px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.bg2};
  border-right: 3px solid ${props => props.theme.colors.accent3};
`;

export const EmojiPlacement = styled.div`
  width: 60px;
  height: 35px;
  font-size: 24px;

  position: absolute;
  top: 260px;
  left: 30px;
  z-index: 8;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HostNameWrapper = styled.div`
  width: 390px;
  height: 35px;
  font-size: 24px;

  position: absolute;
  top: 245px;
  left: 75px;
  z-index: 8;
  padding-left: 10px;

  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.bg3};
`;

export const HostNameWrapperName = styled.div`
  text-transform: uppercase;
  font-size: 1.25rem;
`;
