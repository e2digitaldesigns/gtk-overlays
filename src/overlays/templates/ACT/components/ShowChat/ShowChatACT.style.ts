import styled from "styled-components";

export const ShowChatWrapper = styled.div`
  position: absolute;

  background: linear-gradient(180deg, ${props => props.theme.colors.accent3} 0%, #000 50%);
  background-color: ${props => props.theme.colors.accent1};

  border-width: 2px 8px 2px 2px;
  border: 3px solid ${props => props.theme.colors.accent2};
  box-shadow: inset 3px 4px 5px rgba(0, 0, 0, 0.5);
  height: 120px;
  left: 400px;
  overflow: hidden;
  padding: 0 0.625rem 0 1rem;
  position: absolute;
  top: 40px;
  width: 1300px;

  transform: skew(-30deg);
  > * {
    transform: skew(30deg);
  }
`;

export const ShowChatWrapperInner = styled.div`
  position: absolute;
  left: 200px;
  height: 120px;
  width: 1040px;
`;
