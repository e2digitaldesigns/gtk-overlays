import styled from "styled-components";

export const Guide = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  width: 1920px;
  height: 1080px;
  /* background-color: green; */
`;

export const HostBoxTemplate = styled.div`
  width: 778px;
  height: 750px;
  position: absolute;
  top: 20px;
  border: 4px solid red;
  background: green;
`;

export const HostBox21 = styled(HostBoxTemplate)`
  left: 80px;
`;

export const HostBox22 = styled(HostBoxTemplate)`
  left: 854px;
`;

export const HostBox31 = styled(HostBoxTemplate)`
  left: 80px;
  width: 520px;
`;

export const HostBox32 = styled(HostBox31)`
  left: 596px;
`;

export const HostBox33 = styled(HostBox31)`
  left: 1112px;
`;

export const Tabs = styled.div`
  min-width: 240px;
  height: 50px;
  position: absolute;
  top: 701px;
  background-color: black;
  border-right: 4px solid red;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px 10px 0 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const TabHostName21 = styled(Tabs)`
  left: 100px;
`;

export const TabHostName22 = styled(Tabs)`
  left: 874px;
`;

export const TabHostName31 = styled(Tabs)`
  left: 100px;
`;

export const TabHostName32 = styled(Tabs)`
  left: 616px;
`;

export const TabHostName33 = styled(Tabs)`
  left: 1132px;
`;

export const TabShowName = styled(Tabs)`
  min-width: 300px;
  top: 39px;
  left: 100px;
`;
