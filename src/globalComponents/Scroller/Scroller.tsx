import React from "react";
import * as Styled from "./Scroller.styles";

interface IntStyle {
  color?: string;
  backgroundColor?: string;
  padding?: string;
}

interface IntScrollerListItem {
  title?: string;
  text: string;
}

interface IntCss {
  container?: object;
  title?: object;
  text?: object;
  childWrapper?: object;
}

interface IntScrollerProps {
  children?: React.ReactElement[] | React.ReactElement;
  data?: IntScrollerListItem[];
  fontSize?: number;
  titleStyle?: IntStyle;
  textStyle?: IntStyle;
  timer?: number;
  sx?: IntCss;
  callBack?: (item: IntScrollerListItem) => void;
  showTitle?: boolean;

  transition?: "scroll" | "fade";
}

enum TickerStatus {
  active = "active",
  inactive = "in-active",
  starter = "starter",
  static = "static",
  hidden = "hidden"
}

const GTK_Scroller: React.FC<IntScrollerProps> = ({
  children,
  data,
  fontSize,
  titleStyle,
  textStyle,
  timer = 3,
  sx,
  showTitle = true,
  callBack,
  transition = "scroll"
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);
  const [oldIndex, setOldIndex] = React.useState<number>(-1);
  const theTimer = (timer && timer > 2 ? timer : 3) * 1000;

  const length = data
    ? data.length
    : children
    ? React.Children.count(children)
    : 0;

  React.useEffect(() => {
    setOldIndex(activeIndex);
    setActiveIndex(activeIndex < length - 1 ? activeIndex + 1 : 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      const newIndex = activeIndex < length - 1 ? activeIndex + 1 : 0;
      setOldIndex(activeIndex);
      setActiveIndex(newIndex);
    }, theTimer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  React.useEffect(() => {
    if (callBack && data) {
      callBack(data[activeIndex]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const setClassName = (index: number) => {
    let classic = TickerStatus.static;
    if (activeIndex === -1) {
      return classic;
    }

    classic =
      length === 1
        ? TickerStatus.static
        : activeIndex === -1
        ? TickerStatus.starter
        : activeIndex === index
        ? TickerStatus.active
        : oldIndex === index
        ? TickerStatus.inactive
        : TickerStatus.hidden;

    return classic;
  };

  return (
    <Styled.Container sx={sx?.container}>
      <Styled.List>
        {data && typeof data === "object" && (
          <>
            {data.map((m: any, index: number) => (
              <Styled.ListItem
                state={setClassName(index)}
                key={index}
                fontSize={fontSize}
                transition={transition}
              >
                <>
                  {m.title && showTitle && (
                    <Styled.ListItemDivTitle
                      titleStyle={titleStyle}
                      sx={sx?.title}
                    >
                      {m.title}
                    </Styled.ListItemDivTitle>
                  )}
                  <Styled.ListItemDivText textStyle={textStyle} sx={sx?.text}>
                    {m?.text && m.text}
                  </Styled.ListItemDivText>{" "}
                </>
              </Styled.ListItem>
            ))}
          </>
        )}

        {children && (
          <>
            {React.Children.map(children, (element, index) => (
              <Styled.ListItem
                state={setClassName(index)}
                key={index}
                fontSize={fontSize}
                data-testid={`children-list-item-${setClassName(index)}`}
                isChildren={true}
                transition={transition}
              >
                <Styled.ListItemDivText
                  sx={sx?.childWrapper}
                  data-testid="149 - list item div text"
                >
                  {React.cloneElement(element)}
                </Styled.ListItemDivText>
              </Styled.ListItem>
            ))}
          </>
        )}
      </Styled.List>
    </Styled.Container>
  );
};

export default GTK_Scroller;
