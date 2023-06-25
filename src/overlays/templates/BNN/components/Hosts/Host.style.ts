import styled from "styled-components";

interface IntHostBoxWrapperPlater {
  seats?: number;
}

const HostBoxWrapperPlaterDefaults = styled.div<IntHostBoxWrapperPlater>`
  position: absolute;
  top: 140px;
  left: 50px;
  height: 610px;
  width: 1820px;

  display: grid;
  gap: 40px;
`;

export const HostBoxWrapperPlater = styled(HostBoxWrapperPlaterDefaults)`
  grid-template-columns: repeat(${props => props.seats || 1}, 1fr);
`;

export const HostBoxWrapper1HostAndVideo = styled(HostBoxWrapperPlaterDefaults)`
  top: 80px;
  grid-template-columns: 450px 1fr 1325px;
  gap: 0px;
  height: 745px;

  > div:first-child {
    grid-column: 1;
    margin-top: 45px;
    height: 400px;
  }

  > div:last-child {
    grid-column: 3;
    justify-content: right;
    text-align: right;
  }
`;

export const HostBoxWrapper2HostAndVideo = styled(HostBoxWrapperPlaterDefaults)`
  grid-template-columns: 1fr 1080px 1fr;
  gap: 20px;

  > div:first-child,
  > div:last-child {
    margin-top: 55px;
    height: 400px;
  }
`;
