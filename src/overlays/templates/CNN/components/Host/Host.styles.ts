import styled from "styled-components";

export const HostWrapper = styled.div<{ hideHostName: boolean }>`
  width: 1280px;
  height: 630px;

  position: absolute;
  top: 10px;
  left: 630px;
  z-index: 10;

  border: 5px solid ${props => props.theme.colors.accent1};

  > div {
    transition: opacity 1.5s;
    opacity: ${props => (props.hideHostName ? "0" : "1")};
  }
`;

export const VoteDisplay = styled.div`
  width: 60px;
  height: 35px;
  font-size: 1.25rem;

  position: absolute;
  bottom: 20px;
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
  bottom: 5px;
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
  bottom: 20px;
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
