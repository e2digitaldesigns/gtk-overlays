import styled from "styled-components";

export const InfoBox = styled.div`
  box-sizing: border-box;
  width: 1580px;
  height: 135px;
  position: absolute;
  top: 45px;
  left: 240px;
  background-color: rgba(0, 0, 0, 0.98);
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 42px;
  text-transform: uppercase;
`;

export const SubTitle = styled(Title)`
  font-size: 28px;
`;
