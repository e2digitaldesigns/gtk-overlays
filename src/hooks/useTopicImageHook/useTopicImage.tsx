import { useDataContext } from "../../context";

type TopicImage = (topicImage?: string) => JSX.Element | null;
type TopicImageHook = () => {
  topicImage: TopicImage;
};

const useTopicImageHook: TopicImageHook = () => {
  const { logo } = useDataContext();

  const topicImage: TopicImage = topicImage => {
    let finalTopicImage: string = logo;

    if (topicImage) {
      finalTopicImage = topicImage;
    }

    return finalTopicImage ? (
      <img
        src={finalTopicImage}
        alt="topic"
        style={{ objectFit: "cover", minWidth: "100%", minHeight: "100%" }}
      />
    ) : null;
  };

  return { topicImage };
};

export default useTopicImageHook;
