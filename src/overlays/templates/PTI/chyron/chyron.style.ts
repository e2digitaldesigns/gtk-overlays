import styled from "styled-components";

export const ChyronHeader = styled.div`
  align-content: center;
  background-color: ${props => props.theme.colors.scrollHeader};
  border-right: 1px solid ${props => props.theme.colors.accent2};
  color: ${props => props.theme.colors.scrollHeaderFont};
  display: grid;
  font-family: "Bebas Neue";
  font-size: 36px;
  height: 100px;
  justify-content: center;
  left: 0px;
  position: absolute;
  top: 980px;
  width: 120px;
`;

export const ChyronWrapper = styled.div`
  background-color: ${props => props.theme.colors.scrollBackground};
  color: ${props => props.theme.colors.scrollFont};
  height: 100px;
  left: 120px;
  top: 980px;
  width: 1800px;
  position: absolute;
  font-family: "Bebas Neue";
  font-size: 36px;
  padding-left: 10px;
`;
