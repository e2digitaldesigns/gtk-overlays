import styled from "styled-components";
import { darken } from "polished";

interface ITickerDefault {
  color?: string;
}

export const Ticker = styled.div<ITickerDefault>`
  position: absolute;
  bottom: 50px;
  height: 30px;

  background-color: ${props =>
    darken(0.036, props.color ? props.color : props.theme.colors.accent1)};

  left: 165px;
  width: 550px;
  z-index: 25;
  color: #fff;
  padding-left: 75px;
  font-size: 22px;
  overflow: hidden;
  text-transform: uppercase;

  clip-path: polygon(8% 0, 100% 0, 97% 100%, 0% 100%);
`;
