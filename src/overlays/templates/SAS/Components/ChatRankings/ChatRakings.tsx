import React from "react";
import { TopChatRank } from "../../../../../globalComponents";

const ChatRankingsSAS: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "220px",
          height: "270px",
          width: "325px"
        }}
      >
        <TopChatRank
          count={7}
          topSpotHeight={70}
          topSpotFontSize="28px"
          rankFontSize="20px"
          userFontSize="18px"
          countFontSize="18px"
        />
      </div>
    </>
  );
};

export default ChatRankingsSAS;
