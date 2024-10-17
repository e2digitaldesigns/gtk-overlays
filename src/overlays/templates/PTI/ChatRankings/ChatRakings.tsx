import React from "react";
import { ChatRank } from "../../../../globalComponents";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

const ChatRankingsPTI: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsPTI.ChatRank)) return null;

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "20px",
          height: "270px",
          width: "325px"
        }}
      >
        <ChatRank
          count={7}
          borderBottomColor="#444"
          topSpotHeight={70}
          topSpotFontSize="28px"
          rankFontSize="20px"
          userBgColor="#24082e"
          userFontSize="18px"
          countFontSize="18px"
        />
      </div>
    </>
  );
};

export default ChatRankingsPTI;
