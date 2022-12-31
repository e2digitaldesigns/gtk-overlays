import styled from "styled-components";

export const ContentBoxTemplate = styled.div`
  width: 340px;
  height: 200px;
  position: absolute;
  right: 80px;

  /* border: 4px solid red; */
  z-index: 999;

  display: grid;
  grid-template-rows: 35px 1fr;

  overflow: hidden;
  background-color: #111;

  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));

  ::before {
    content: "";
    position: absolute;
    bottom: -58px;
    left: -47px;
    height: 100px;
    width: 80px;
    background: linear-gradient(
      270deg,
      rgba(16, 16, 16, 1) 0%,
      rgba(1, 67, 130, 1) 55%
    );
    transform: rotate(45deg);
  }

  ::after {
    content: "";
    position: absolute;
    top: 8px;
    right: -27px;
    height: 50px;
    width: 45px;
    background-color: #c90003;
    transform: rotate(45deg);
  }
`;

export const ContentBox_1 = styled(ContentBoxTemplate)`
  top: 30px;
`;

export const ContentBox_2 = styled(ContentBoxTemplate)`
  top: 240px;
`;

export const ContentBox_3 = styled(ContentBoxTemplate)`
  top: 450px;
`;

export const TopicName = styled.div`
  height: 35px;
  background-color: #c90003;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  padding: 0 8px;

  overflow: hidden;
  text-overflow: ellipsis;
`;
