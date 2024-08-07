import styled from "styled-components";

export const UpNextWrapper = styled.div`
  border: 4px solid ${props => props.theme.colors.accent2};
  position: absolute;

  left: -40px;
  top: 55px;

  height: 145px;
  width: 600px;
  overflow: hidden;
  padding: 30px 0px 10px 80px;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 115px 1fr;

  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.accent3} 0%,
    ${props => props.theme.colors.accent1} 50%
  );
  box-shadow: inset 3px 4px 5px rgba(0, 0, 0, 0.5);
  transform: skew(-30deg);
  > * {
    transform: skew(30deg);
  }
  z-index: 1;
`;

export const UpNextTitleDiv = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: right;
  border-right: 1px solid ${props => props.theme.colors.accent2};
  padding-right: 10px;
  text-transform: uppercase;
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
  position: absolute;
  transition: top 0.5s ease-in-out;
`;

interface TopicLiProps {
  liPosition: number;
  liHeight: number;
}

export const TopicLi = styled.li<TopicLiProps>`
  height: ${props => props.liHeight}px;
  border-bottom: 1px solid black;

  color: ${props => (props.liPosition === 1 ? "#aaa" : props.liPosition === 2 ? "#777" : "#444")};

  transition: color 0.5s ease-in-out;
`;
