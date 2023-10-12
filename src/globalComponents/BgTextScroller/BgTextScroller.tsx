import React from "react";
import * as Styled from "./BgTextScroller.style";

interface IBgTextScrollerProps {
  bgColor?: string;
  fontColor1?: string;
  fontColor2?: string;
  speed1?: string;
  speed2?: string;
  text?: string;
  xSpacer?: number;
  ySpacer?: number;
  isVisible?: boolean;
}

const GTK_BgTextScroller: React.FC<IBgTextScrollerProps> = ({
  bgColor = "#ededed",
  fontColor1 = "#222222",
  fontColor2 = "#222222",
  speed1 = "20s",
  speed2 = "30s",
  text = "Gamer Tool Kit",
  xSpacer = 30,
  ySpacer = 2.35,
  isVisible = true
}) => {
  const [stageWidth, setStageWidth] = React.useState(0);
  const [stageHeight, setStageHeight] = React.useState(0);

  const [wordWidth, setWordWidth] = React.useState(0);
  const [wordHeight, setWordHeight] = React.useState(0);

  const [wordCount, setWordCount] = React.useState(0);
  const [lineCount, setLineCount] = React.useState(0);

  const wordRef = React.useRef<HTMLDivElement>(null);
  const stageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const setStage = () => {
      const word = wordRef.current;
      const stage = stageRef.current;
      if (word && stage) {
        const { width, height } = word.getBoundingClientRect();
        const { width: sWidth, height: sHeight } =
          stage.getBoundingClientRect();

        setStageWidth(sWidth);
        setStageHeight(sHeight);

        setWordWidth(width);
        setWordHeight(height);

        setWordCount(Math.ceil((stageWidth * 1.5) / (width + xSpacer)));
        setLineCount(Math.ceil(stageHeight / Math.ceil(height * ySpacer)));
      }
    };

    setStage();

    window.addEventListener("resize", setStage);

    return () => {
      window.removeEventListener("resize", setStage);
    };
  }, [stageHeight, stageWidth, xSpacer, ySpacer]);

  const wordArray = Array.from({ length: wordCount || 1 }, (_, i) => i);
  const lineArray = Array.from({ length: lineCount }, (_, i) => i);

  return (
    <>
      <Styled.ScrollContainer
        ref={stageRef}
        bgColor={bgColor}
        isVisible={isVisible}
      >
        <Styled.SampleWord ref={wordRef}>{text}</Styled.SampleWord>

        {lineArray.map((_, index) => (
          <Styled.ScrollLine
            key={index}
            posTop={index * wordHeight * ySpacer}
            totalWidth={xSpacer + wordWidth}
            gap={xSpacer}
            reverse={index % 2 !== 0}
            speed={index % 2 === 0 ? speed1 : speed2}
          >
            {wordArray.map((_, i) => (
              <div
                key={i}
                style={{
                  whiteSpace: "nowrap",
                  width: "fit-content",
                  color: index % 2 === 0 ? fontColor1 : fontColor2
                }}
              >
                {text}
              </div>
            ))}
          </Styled.ScrollLine>
        ))}
      </Styled.ScrollContainer>
    </>
  );
};

export default GTK_BgTextScroller;
