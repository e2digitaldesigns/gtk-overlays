import styled from "styled-components";

export const TopicsWrapper = styled.div`
  position: absolute;
  top: 175px;
  left: 0px;
  width: 610px;
  height: 700px;
  overflow: hidden;
`;

export const TopicsWrapperNormal = styled.div<{ showMenu: boolean }>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 610px;
  height: 700px;
  overflow: hidden;

  opacity: ${props => (props.showMenu ? 1 : 0)};
  /* transition: opacity 0.25s ease-in-out; */
  z-index: 2;
`;

export const TopicsWrapperSmall = styled.div<{ showMenu: boolean }>`
  position: absolute;
  left: 0px;
  top: 300px;
  width: 610px;
  height: 400px;
  overflow: hidden;

  opacity: ${props => (props.showMenu ? 1 : 0)};
  /* transition: opacity 0.25s ease-in-out; */
  z-index: 3;
`;

export const TopicsInnerWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  scroll-snap-type: y mandatory;
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
`;

interface TopicLiProps {
  liPosition: number;
  liHeight: number;
  clicked: boolean;
  active: boolean;
  hasImage: boolean;
}

export const TopicLi = styled.li<TopicLiProps>`
  height: ${props => props.liHeight}px;
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

  display: grid;
  grid-template-columns: ${props => (props.hasImage ? "130px 1fr" : "1fr")};
  align-items: center;
  grid-gap: 5px;
`;

export const TopicLiImage = styled.div`
  height: 80px;
  width: 120px;

  margin-left: 10px;
  background-color: ${props => props.theme.colors.bg1};
  border: 2px solid ${props => props.theme.colors.accent2};
  overflow: hidden;
  > img {
    height: 80px;
    width: 120px;
  }
`;

interface TopicLiInnerProps {
  active: boolean;
  hasImage: boolean;
}

export const TopicLiName = styled.div<TopicLiInnerProps>`
  height: 92px;
  width: ${props => (props.hasImage ? "465px" : "600px")};
  padding-left: 10px;
  margin-top: 8px;

  display: flex;
  align-items: center;

  white-space: pre-wrap;

  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.45rem;

  overflow: hidden;
`;

interface TopicLiLiveProps {
  active: boolean;
}

export const TopicLiLive = styled.div<TopicLiLiveProps>`
  position: absolute;
  right: 10px;
  top: -2px;
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
  top: -2px;
  color: ${props => props.theme.colors.font2};
  font-style: italic;
  text-align: right;
  padding: 5px 10px 0 0;
  transition: all 0.5s ease-in-out;

  opacity: ${props => (props.isNext ? 1 : 0)};
`;
