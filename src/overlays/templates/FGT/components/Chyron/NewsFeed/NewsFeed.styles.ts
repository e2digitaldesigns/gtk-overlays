import styled from "styled-components";

export const NewsFeed = styled.div`
  width: 1890px;
  height: 40px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-left: 90px;
  background-color: ${props => props.theme.colors.bg3};
  border-left: 0.125rem solid ${props => props.theme.colors.accent1};
  text-transform: uppercase;

  :before {
    content: "NEWS";
    background-color: ${props => props.theme.colors.bg2};
    height: 40px;
    width: 80px;
    position: absolute;
    left: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    letter-spacing: 1px;
  }
`;
