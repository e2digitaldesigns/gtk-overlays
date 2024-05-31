import styled from "styled-components";

interface ButtonProps {
  bgColor: string;
  color: string;
  rounded: boolean;
}

export const Buttons = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  transition: 0.25s;
  padding: 0.25rem 0.75rem;

  color: ${props => props.color};
  font-size: 0.875rem;

  background-color: ${props => props.bgColor};

  border-radius: ${props => (props.rounded ? ".25rem" : "0")};

  :hover {
    cursor: pointer;
    filter: brightness(1.75);
    /* color: #fff; */
  }
`;
