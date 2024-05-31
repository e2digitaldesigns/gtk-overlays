import React from "react";
import * as Styled from "./Emoji.styles";
import socketServices from "../../services/socketServices";
import { IEmojiReturn, IEmojiData, RequestType } from "../../types";

interface IEmoji {
  emoji: string;
}

const Emoji: React.FC<IEmoji> = ({ emoji }) => {
  const left = Math.random() * 80 + 10 + "%";
  const speed = Math.random() * 4 + 2 + "s";
  const fontSize = Math.random() * 1.5 + 1.5 + "rem";

  return (
    <Styled.EmojiDiv fontSize={fontSize} left={left} speed={speed}>
      {emoji}
    </Styled.EmojiDiv>
  );
};

const MemoizedEmoji = React.memo(Emoji);

const EmojiWrapper: React.FC = () => {
  const [emojiState, setEmojiState] = React.useState<IEmojiData[]>([]);
  const MAX_TIME = 10;

  React.useEffect(() => {
    let stillHere = true;
    const queryParams = new URLSearchParams(window.location.search);

    socketServices.subscribeOverlaysEmojis(
      (err: unknown, data: IEmojiReturn) => {
        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid !== queryParams.get(RequestType.Template)) return;

        if (!stillHere) return;
        setEmojiState(prevState => [
          ...prevState.filter(item => {
            const currentTime = new Date();
            const itemTime = new Date(item.date);
            const differenceInSeconds =
              (currentTime.getTime() - itemTime.getTime()) / 1000;
            return differenceInSeconds < MAX_TIME;
          }),
          ...data.emojis
        ]);
      }
    );

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlaysEmojis();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.EmojiWrapper>
      {emojiState.map((data: IEmojiData, index: number) => (
        <MemoizedEmoji key={data._id} emoji={data.emoji} />
      ))}
    </Styled.EmojiWrapper>
  );
};

export default EmojiWrapper;
