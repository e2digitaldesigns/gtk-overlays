import styled from "styled-components";

export const NewsFeed = styled.div`
  width: 1840px;
  height: 40px;
  position: absolute;
  top: 185px;
  left: 0px;
  padding-left: 160px;
  /* background-color: ${props => props.theme.colors.bg1}; */
  background-color: rgba(0, 0, 0, 0.97);
  border-right: 0.25rem solid ${props => props.theme.colors.accent1};
  font-size: 22px;
  text-transform: uppercase;

  :before {
    content: "NEWS";
    background-color: ${props => props.theme.colors.accent1};
    height: 40px;
    width: 150px;
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
