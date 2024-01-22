import styled from "styled-components";

export const TopicsWrapper = styled.div`
  position: absolute;
  top: 175px;
  left: 0px;
  width: 610px;
  height: 600px;
`;

export const TopicsInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

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
  width: 610px;
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
  height: 100px;
  width: 610px;
  border-bottom: 5px solid ${props => props.theme.colors.accent2};
  border-left: 5px solid;
  border-left-color: ${props =>
    props.active ? props.theme.colors.accent3 : props.theme.colors.bg};

  color: ${props =>
    props.active ? props.theme.colors.font1 : props.theme.colors.font2};

  overflow: hidden;

  transition: all 0.5s ease-in-out;

  position: relative;

  background-color: ${props => props.theme.colors.bg};

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
  height: 100%;
  width: 100%;

  padding: 0px 20px;

  display: flex;
  align-items: center;

  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 400;
`;

interface TopicLiLiveProps {
  active: boolean;
}

export const TopicLiLive = styled.div<TopicLiLiveProps>`
  position: absolute;
  right: 10px;
  top: 0px;
  color: ${props => props.theme.colors.accent3};
  font-style: italic;
  text-align: right;
  padding: 5px 10px 0 0;
  transition: all 0.5s ease-in-out;

  opacity: ${props => (props.active ? 1 : 0)};
`;

interface TopicLiNextProps {
  isNext: boolean;
}

export const TopicLiNext = styled.div<TopicLiNextProps>`
  position: absolute;
  right: 10px;
  top: 0px;
  color: ${props => props.theme.colors.font2};
  font-style: italic;
  text-align: right;
  padding: 5px 10px 0 0;
  transition: all 0.5s ease-in-out;

  opacity: ${props => (props.isNext ? 1 : 0)};
`;
