import styled, { CSSObject } from "styled-components";

interface UpNextTitleDivProps {
  titleCss: CSSObject;
}
export const UpNextTitleDiv = styled.div<UpNextTitleDivProps>`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: right;
  border-right: 1px solid ${props => props.theme.colors.accent1};
  padding-right: 10px;
  text-transform: uppercase;

  ${props => props.titleCss}
`;

export const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-transform: uppercase;
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
  position: absolute;
  transition: top 0.5s ease-in-out;
`;

interface TopicLiProps {
  liPosition: number;
  liHeight: number;
  topicCss: CSSObject;
}

export const TopicLi = styled.li<TopicLiProps>`
  height: ${props => props.liHeight}px;
  border-bottom: 1px solid black;

  color: ${props =>
    props.liPosition === 1 ? "#aaa" : props.liPosition === 2 ? "#777" : "#444"};

  transition: color 0.5s ease-in-out;

  ${props => props.topicCss}
`;
