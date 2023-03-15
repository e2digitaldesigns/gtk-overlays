import styled from "styled-components";

const divider = styled.div`
  height: 860px;
  width: 10px;
  background-color: black;
  position: absolute;
  top: 0;
  transition: all 5s;
`;

interface IHost2Up {
  bgColor: string;
}

export const Host2Up = styled(divider)<IHost2Up>`
  background-color: ${props => props.bgColor};
  left: 755px;
`;

interface IHost3Up {
  bgColor: string;
  section: number;
}

export const Host3Up = styled(divider)<IHost3Up>`
  background-color: ${props => props.bgColor};
  left: ${props => (props.section === 1 ? "500px" : "1010px")};
`;
