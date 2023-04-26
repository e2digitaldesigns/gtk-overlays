import styled from "styled-components";
import bg from "../../../../assets/images/1520x20-desc-gradient.png";

export const ShowChatWrapper = styled.div`
  position: absolute;

  left: 0;
  top: 860px;

  height: 120px;
  width: 1520px;
  overflow: hidden;

  padding: 10px 20px;

  background-size: cover;
  background-color: #a15004;
  background-image: url(${bg});
`;

export const EntireChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #24082e; */
  overflow: hidden;
  padding: 10px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.625rem;

  border-bottom: 3px solid #a0941c;
  transition: left 500ms ease-in-out;
`;

export const ShowChatImage = styled.div`
  width: 65px;
  height: 65px;
  background-color: #24082e;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: normal !important;

  /* font-family: "Roboto", sans-serif; */
  font-family: "BebasNeue";

  color: white;
  margin-bottom: 50px;
  text-shadow: 1px 1px #000;
`;

export const MessageName = styled.div`
  font-size: 2rem;
  color: #fff;
`;

export const MessageText = styled.div`
  font-size: 1.75rem;
  word-break: break-word;

  img {
    height: 1rem;
  }
`;
