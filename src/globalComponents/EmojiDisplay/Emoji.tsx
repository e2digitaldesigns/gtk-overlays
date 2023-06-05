import React from "react";
import * as Styled from "./Emoji.styles";
import socketServices from "../../services/socketServices";
import { RequestType } from "../../types";

interface IEmoji {
  emoji: string;
}

const Emoji: React.FC<IEmoji> = ({ emoji }) => {
  const padding = 3,
    leftMax = 97,
    speedMin = 5,
    speedMax = 8;

  const left = Math.floor(Math.random() * (leftMax - padding) + padding) + "%";
  const speed = Math.random() * (speedMax - speedMin) + speedMin + "s";

  return (
    <Styled.EmojiDiv left={left} speed={speed}>
      {emoji}
    </Styled.EmojiDiv>
  );
};

const MemoizedEmoji = React.memo(Emoji);

interface IEmojiWrapper {
  isDemo?: boolean;
}

interface IEmojiData {
  _id: string;
  date: Date;
  emoji: string;
}

interface IEmojiReturn {
  _id: string;
  date: Date;
  action: string;
  broadcasterName: string;
  emojis: IEmojiData[];
  channel: string;
  tid: string;
  uid: string;
}

const EmojiWrapper: React.FC<IEmojiWrapper> = ({ isDemo = false }) => {
  const [emojiState, setEmojiState] = React.useState<IEmojiData[]>([]);
  const emojiArr = ["🤣", "😁", "🙌", "❤️", "😍", "👌", "💕", "😘", "😒", "👍"];
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

  const handleAddEmoji = () => {
    const obj = {
      _id: Math.random().toString(),
      date: new Date(),
      emoji: emojiArr[Math.floor(Math.random() * emojiArr.length)]
    };
    setEmojiState(prev => [...prev, ...[obj]]);
  };

  return (
    <Styled.EmojiWrapper>
      {isDemo && (
        <>
          <h1>Total Emojis: {emojiState.length}</h1>
          <button onClick={handleAddEmoji}>Add Emoji</button>
        </>
      )}

      {emojiState.map((data: IEmojiData, index: number) => (
        <MemoizedEmoji key={data._id} emoji={data.emoji} />
      ))}
    </Styled.EmojiWrapper>
  );
};

export default EmojiWrapper;
