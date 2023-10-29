import styled from "styled-components";

const topicStateProps = (linkState: string) => {
  let style;

  switch (linkState) {
    case "unvisited":
      style = ` left: -100%; `;
      break;

    case "active":
      style = ` left: 0; `;
      break;

    case "visited":
      style = ` left: 100%; `;
      break;

    default:
      break;
  }

  return style;
};

interface IDescription {
  isVisible: boolean;
}

export const DescriptionImageWrapperMain = styled.div<IDescription>`
  overflow: hidden;
  white-space: pre-wrap;

  width: 390px;
  height: 230px;
  left: 105px;
  top: 740px;
  position: absolute;

  border: 1px solid ${props => props.theme.colors.accent2};
  background-color: ${props => props.theme.colors.bg1};
  opacity: ${props => (props.isVisible ? "1" : "0")};
  z-index: 1;
`;

interface IImageDescriptionWrapper {
  linkState: string;
}

export const ImageDescriptionWrapper = styled.div<IImageDescriptionWrapper>`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: absolute;

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  ${props => topicStateProps(props.linkState)};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface IDescriptionWrapperMain {
  isVisible: boolean;
}

export const DescriptionWrapperMain = styled.div<IDescriptionWrapperMain>`
  color: ${props => props.theme.colors.primaryText};
  overflow: hidden;
  text-shadow: 1px 2px #000;
  white-space: pre-wrap;

  width: 900px;
  height: 230px;
  left: 505px;
  top: 740px;
  position: absolute;

  background-color: ${props => props.theme.colors.bg1};
  opacity: ${props => (props.isVisible ? "1" : "0")};
  z-index: 1;
`;

interface IDescriptionWrapper {
  linkState: string;
}

export const DescriptionWrapper = styled.div<IDescriptionWrapper>`
  width: 100%;
  height: 150px;
  left: 0px;
  top: 0px;
  position: absolute;
  padding: 12px;

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  ${props => topicStateProps(props.linkState)};
`;

export const Name = styled.div`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Desc = styled.div`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 22px;
  line-height: 25px;
`;
