import styled from "styled-components";

export const SubHeaderWrapper = styled.div`
  position: absolute;
  top: 95px;
  left: 0px;
  width: 610px;
  height: 80px;

  background-color: ${props => props.theme.colors.bg3};
  border-bottom: 5px solid ${props => props.theme.colors.accent2};

  padding: 5px 10px;

  display: grid;
  grid-template-rows: 35px 30px;
`;

export const SubHeaderTitle = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

export const SubHeaderSubtitle = styled.div`
  height: 100%;
  width: 100%;
`;
