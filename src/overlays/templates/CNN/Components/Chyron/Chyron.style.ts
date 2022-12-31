import styled from "styled-components";

export const TopicTitleWrapper = styled.div`
  width: 1015px;
  height: 40px;
  padding: 5px 0 0 15px;
  background-color: #c90003;
  position: absolute;
  left: 80px;
  top: 825px;
`;

export const TopicTitle = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TopicDescriptionWrapper = styled.div`
  width: 1565px;
  height: 135px !important;
  position: absolute;
  left: 80px;
  top: 865px;
  background-color: black;
  z-index: 600;
  padding: 5px 20px;
  overflow: hidden;
  border-left: 10px solid #c90003;
  display: block;
`;

export const TopicDescription = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 38px;
  font-weight: 600;
  text-transform: uppercase;
  overflow: hidden;
`;

export const NewsTickerWrapper = styled.div`
  width: 1410px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  left: 80px;
  bottom: 20px;
  color: #fff;
  overflow: hidden;
  padding-left: 10px;
  font-size: 20px;
`;

export const SocialTickerWrapper = styled.div`
  width: 340px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  left: 1500px;
  bottom: 20px;
  z-index: 500;
  overflow: hidden;
  padding-left: 10px;

  color: #fff;
  font-size: 22px;
  text-transform: uppercase;
`;

export const StatusBox = styled.div`
  width: 185px;
  height: 50px;
  color: #fff;
  font-size: 32px;
  position: absolute;
  left: 1655px;
  top: 815px;
  display: -ms-grid;
  display: grid;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #c90003;
`;

export const LogoBox = styled.div`
  width: 185px;
  height: 95px;
  position: absolute;
  left: 1655px;
  top: 865px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeWrapper = styled.div`
  width: 185px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;
  left: 1655px;
  bottom: 80px;
  color: #fff;
  overflow: hidden;
  border-right: 5px solid #c90003;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 500;
`;
