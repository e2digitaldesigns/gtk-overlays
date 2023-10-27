import React from "react";
import { TopChatRank } from "../../../../../globalComponents";
import { useParams } from "../../../../../hooks";
import { SectionsXBX } from "../../../../../types";

import { theme } from "../../Theme/GlobalTheme";

const ChatRankingsXBX: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsXBX.ChatRank)) return null;

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "126px",
          top: "41px",
          height: "270px",
          width: "325px"
        }}
      >
        <TopChatRank
          count={5}
          topSpotHeight={70}
          topSpotFontSize="28px"
          rankFontSize="20px"
          userFontSize="18px"
          countFontSize="18px"
          borderBottomColor={theme.colors.border}
          rankBgColor="#232323"
          userBgColor={theme.colors.accent4}
          countBgColor={theme.colors.accent4}
        />
      </div>
    </>
  );
};

export default ChatRankingsXBX;
