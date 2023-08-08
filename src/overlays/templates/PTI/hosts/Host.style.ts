import styled from "styled-components";

interface IDivider {
  bgColor: string;
}

export const Divider = styled.div<IDivider>`
  height: 860px;
  width: 10px;

  position: absolute;
  top: 0;
  left: 755px;
  transition: all 5s;

  background-color: ${props => props.bgColor};
`;

export const Divider2 = styled.div<IDivider>`
  transition: all 5s;
  position: absolute;
  left: 514px;
  width: 496px;
  height: 860px;
  border-left: 10px solid ${props => props.bgColor};
  border-right: 10px solid ${props => props.bgColor};
`;

export const Label = styled.div``;
