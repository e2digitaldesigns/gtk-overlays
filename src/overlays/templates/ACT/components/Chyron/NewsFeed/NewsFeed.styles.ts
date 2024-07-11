import styled from "styled-components";

export const NewsFeed = styled.div`
  width: 1850px;
  height: 50px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-left: 170px;
  background-color: ${props => props.theme.colors.accent1};
  border-right: 0.25rem solid ${props => props.theme.colors.accent2};
  font-size: 22px;
  text-transform: uppercase;

  transform: skew(-30deg);
  > * {
    transform: skew(30deg);
  }

  z-index: 5;
`;

export const NewsFeedHeader = styled.div`
  background-color: ${props => props.theme.colors.accent4};
  width: 200px;
  height: 50px;
  position: absolute;
  bottom: 0px;
  left: -50px;
  padding-right: 20px;

  display: flex;
  align-items: center;
  justify-content: right;

  font-size: 24px;

  z-index: 10;

  transform: skew(-30deg);
  > * {
    transform: skew(30deg);
  }
`;
