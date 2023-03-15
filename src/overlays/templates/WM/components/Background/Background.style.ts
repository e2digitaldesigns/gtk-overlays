import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  bottom: 80px;
  height: 145px;
  background-color: black;
  position: absolute;
  left: 190px;
  bottom: 80px;
  width: 725px;

  clip-path: polygon(
    2% 12%,
    5% 27%,
    6% 49%,
    6% 76%,
    6% 76%,
    7% 86%,
    7% 82%,
    0 111%,
    88.5% 100%,
    100% 0,
    0 0
  );
  z-index: 5;
`;

interface IBackgroundBorder {
  color?: string;
}

export const BackgroundBorder = styled(Background)`
  left: 200px;
  background-color: ${props => props.color || props.theme.colors.accent1};
  z-index: 1;
`;
