import styled from "styled-components";

const DefaultLabel = styled.div`
  width: 320px;
  height: 40px;

  position: absolute;
  top: 750px;

  font-size: 1.25rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  display: flex;
  align-items: center;
  padding: 0 0.625rem;
  background-color: ${props => props.theme.colors.scrollBackground};
  border-left: 5px solid ${props => props.theme.colors.accent1};
`;

export const Host1 = styled(DefaultLabel)`
  left: 20px;
`;

export const Host22 = styled(DefaultLabel)`
  left: 785px;
`;

export const Host23 = styled(DefaultLabel)`
  left: 785px;
`;

export const Host32 = styled(DefaultLabel)`
  left: 530px;
`;

export const Host33 = styled(DefaultLabel)`
  left: 1040px;
`;

interface HostProps {
  seat: string;
}

type help = { [key: number]: string };

const seaterObj: help = {
  "1": "20px",
  "22": "785px",
  "23": "785px",
  "32": "530px",
  "33": "1040px"
};

export const Host = styled(DefaultLabel)<HostProps>`
  left: ${props =>
    props.seat === "1"
      ? "20px"
      : props.seat === "22"
      ? "785px"
      : props.seat === "23"
      ? "785px"
      : props.seat === "32"
      ? "530px"
      : "1040px"};
`;
