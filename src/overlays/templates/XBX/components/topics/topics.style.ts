import styled from "styled-components";

export const UpNextWrapper = styled.div`
  position: absolute;

  height: 700px;
  width: 390px;
  left: 1425px;
  /* right: 105px; */
  top: 20px;

  overflow: hidden;
`;

export const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;

  overflow: hidden;
  scroll-snap-type: y mandatory;

  position: relative;
`;

interface TopicUlProps {
  ulTop: number;
}

export const TopicUl = styled.ul<TopicUlProps>`
  top: ${props => props.ulTop}px;
  list-style: none;
  height: 100%;
  width: 390px;
  position: absolute;
  transition: top 0.5s ease-in-out;

  scroll-snap-align: top;

  display: grid;
`;

interface TopicLiProps {
  liPosition: number;
  liHeight: number;
  clicked: boolean;
  active: boolean;
}

export const TopicLi = styled.li<TopicLiProps>`
  height: 230px;
  width: 390px;
  border: 1px solid
    ${props =>
      props.active ? props.theme.colors.accent1 : props.theme.colors.border};

  overflow: hidden;

  transition: all 0.5s ease-in-out;
  margin-bottom: 5px;

  position: relative;

  background-color: ${props => props.theme.colors.bg1};

  * {
    opacity: ${props => (props.clicked ? 0.5 : 1)};
    transition: all 0.5s ease-in-out;
  }
`;

interface TopicLiInnerProps {
  active: boolean;
}

export const TopicLiName = styled.div<TopicLiInnerProps>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  font-size: 1.125rem;
  font-weight: 600;

  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;

  padding: 0 4px;

  background-color: ${props => props.theme.colors.bg2};
  z-index: 2;
`;

export const TopicLiImage = styled.div<TopicLiInnerProps>`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 390px;
  height: 230px;

  background-color: ${props => props.theme.colors.bg2};
  z-index: 1;

  > img {
    object-fit: cover;
  }
`;
