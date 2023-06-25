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
  grid-template-columns: 400px 1380px;

  > div:first-child {
    margin-top: 55px;
    height: 500px;
  }

  > div:last-child {
    margin-top: -30px;
    height: 680px;
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
