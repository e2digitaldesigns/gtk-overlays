import styled from "styled-components";
import { TopicStates } from "./types";

const cssParser = (object1: object) => {
  let str = "";

  for (const [key, value] of Object.entries(object1)) {
    str += `${key}: ${value}; `;
  }

  return str;
};

interface IntContainer {
  compHeight: number;
  compWidth?: string;
  sx?: object;
}

export const Container = styled.div<IntContainer>`
  width: ${props => props.compWidth + "px"};
  height: ${props => props.compHeight + "px"};
  padding: 0;

  text-transform: uppercase;

  ${props => props?.sx && cssParser(props.sx)}

  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

interface IntTopicImageWrapper {
  compHeight: number;
  sx?: object;
}

export const TopicImageWrapper = styled.div<IntTopicImageWrapper>`
  ${props => props?.sx && cssParser(props.sx)}

  height: ${props => props.compHeight + "px"};
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

interface IntTopicUlWrapper {
  compHeight: number;
  sx?: object;
}

export const TopicUlWrapper = styled.div<IntTopicUlWrapper>`
  width: 100%;
  height: ${props => props.compHeight + "px"};
  position: relative;
  overflow: hidden;
`;

interface IntTopicUl {
  compHeight: number;
  sx?: object;
  transitionSpeed: number;
  top: number;
}

export const TopicUl = styled.ul<IntTopicUl>`
  width: 100%;

  margin: 0;
  padding: 0;
  list-style: none;

  ${props => props?.sx && cssParser(props.sx)}

  position: absolute;
  top: ${props => props.top + "px"};
  transition: top ${props => props.transitionSpeed + "s"};
`;

const Li = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;

  position: relative;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
`;

interface IntClockDiv {
  bgColor: string;
  compHeight: number;
  sx?: object;
}

export const ClockDiv = styled.div<IntClockDiv>`
  width: 100%;
  height: ${props => props.compHeight + "px"};
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  color: white;
  background-color: ${props => props.bgColor};

  ${props => props?.sx && cssParser(props.sx)}
`;

interface IntBgColors {
  active?: string;
  normal?: string;
  clicked?: string;
}

interface IntTopicLi {
  compHeight: number;
  gradient: "none" | "left" | "right";
  listItemState: TopicStates;
  sx?: object;
  bgColors?: IntBgColors;
}

const stateParser = (state: TopicStates, bgColors: IntBgColors | undefined) => {
  let str = "";

  if (state === TopicStates.Hidden) {
    // if (bgColors?.clicked) str += `background-color: ${bgColors.clicked};`;
    str += `height: 0; border-bottom: none;`;
  }

  if (state === TopicStates.Active) {
    if (bgColors?.active) str += `background-color: ${bgColors.active};`;
  }

  if (state === TopicStates.Normal) {
    if (bgColors?.normal) str += `background-color: ${bgColors.normal};`;
  }

  if (state === TopicStates.Clicked) {
    if (bgColors?.clicked) str += `background-color: ${bgColors.clicked};`;
    str += `opacity: .5;`;
  }

  return str;
};

export const TopicListItem = styled(Li)<IntTopicLi>`
  height: ${props => props.compHeight + "px"};
  overflow: hidden;

  ${props => props?.sx && cssParser(props.sx)}
  ${props =>
    props?.listItemState && stateParser(props.listItemState, props.bgColors)}

  > div {
    ${props => props?.gradient && gradientParser(props.gradient)}
  }

  transition: background-color 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out, height 0.5s ease-in-out;
`;

const gradientParser = (value: string) => {
  if (!value || value === "none") return "";
  const degree = value === "left" ? "120deg" : "300deg";

  return `
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .75;
    background: linear-gradient(
      ${degree},
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
  }
  `;
};

interface IntTopicItemParent extends IntTopicLi {
  isViewable: boolean;
}

export const TopicListItemParent = styled(TopicListItem)<IntTopicItemParent>`
  height: ${props => (props.isViewable ? props?.compHeight : 0)};
  border-bottom-width: ${props => (props.isViewable ? "1px" : 0)};
`;
