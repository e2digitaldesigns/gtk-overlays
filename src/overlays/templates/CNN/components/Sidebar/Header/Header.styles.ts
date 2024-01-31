import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 610px;
  height: 85px;

  background-color: ${props => props.theme.colors.bg3};
  border: 2px solid ${props => props.theme.colors.border2};

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeaderTab = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLeft = styled(HeaderTab)`
  border-right: 1px solid ${props => props.theme.colors.border2};
  background-color: ${props => props.theme.colors.bg2};
`;

export const HeaderRight = styled(HeaderTab)`
  border-left: 1px solid ${props => props.theme.colors.border2};
`;
