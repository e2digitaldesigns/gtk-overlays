import styled from "styled-components";
import * as Animations from "./ScrollerAnimations.styles";

const cssParser = (object1: object) => {
  let str = "";

  for (const [key, value] of Object.entries(object1)) {
    str += `${key}: ${value}; `;
  }

  return str;
};

interface IntContainer {
  sx?: object;
}

export const Container = styled.div<IntContainer>`
  width: 100%;
  height: 100%;
  padding: 0;

  ${props => props?.sx && cssParser(props.sx)}

  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  position: relative;
`;

enum TickerStatus {
  active = "active",
  inactive = "in-active",
  starter = "starter",
  static = "static",
  hidden = "hidden"
}

interface IListItem {
  state: TickerStatus;
  fontSize?: number;
  isChildren?: boolean;
  showTitle?: boolean;
  transition?: string;
  transitionTime: string;
}

const ListItemCommon = styled.li<IListItem>`
  width: 100% !important;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  text-overflow: ellipsis;

  position: absolute;
  top: 0;

  display: ${props => (props.state === TickerStatus.hidden ? "none" : "grid")};
  grid-template-columns: ${props =>
    props.isChildren || !props.showTitle ? "1fr" : "auto 1fr"};

  animation-duration: ${props => props.transitionTime};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  opacity: 1;
`;

export const ListItem = styled(ListItemCommon)<IListItem>`
  font-size: ${props => (props.fontSize ? props.fontSize + "px" : "inherit")};
  animation-name: ${props =>
    props.state === TickerStatus.active
      ? props.transition === "scroll"
        ? Animations.scrollDownIn
        : props.transition === "scroll-left"
          ? Animations.scrollLeftIn
          : Animations.fadeIn
      : props.state === TickerStatus.inactive
        ? props.transition === "scroll"
          ? Animations.scrollDownOut
          : props.transition === "scroll-left"
            ? Animations.scrollLeftOut
            : Animations.fadeOut
        : "none"};
`;

interface IListItemDiv {
  titleStyle?: any;
  textStyle?: any;
  sx?: object;
}

const ListItemDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ListItemDivTitle = styled(ListItemDiv)<IListItemDiv>`
  color: ${props =>
    props?.titleStyle?.color ? props.titleStyle.color : "inherit"};

  background-color: ${props =>
    props?.titleStyle?.backgroundColor && props.titleStyle.backgroundColor};

  padding: ${props => props?.titleStyle?.padding && props.titleStyle.padding};

  justify-content: right;

  ${props => props?.sx && cssParser(props.sx)}
`;

export const ListItemDivText = styled(ListItemDiv)<IListItemDiv>`
  width: 100%;
  color: ${props =>
    props?.textStyle?.color ? props.textStyle.color : "inherit"};

  background-color: ${props =>
    props?.textStyle?.backgroundColor && props.textStyle.backgroundColor};

  padding: ${props => props?.textStyle?.padding && props.textStyle.padding};

  ${props => props?.sx && cssParser(props.sx)}
`;
