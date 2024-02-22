import { TopicVotesParsed } from "../hooks/useVotingHook/useVotingHook";

export const topicVoterParser = (
  string: string | undefined,
  votes: TopicVotesParsed
) => {
  if (!string) return "";

  const votingMap = {
    "{{true}}": votes.trueCount,
    "{{false}}": votes.falseCount,
    "{{1}}": votes.oneCount,
    "{{2}}": votes.twoCount,
    "{{yes}}": votes.yesCount,
    "{{no}}": votes.noCount
  };

  let replacedString = Object.entries(votingMap).reduce(
    (str, [placeholder, count]) => str.replace(placeholder, count.toString()),
    string
  );

  return replacedString;
};

export const hasTopicVoting = (string: string | undefined): boolean => {
  if (!string) return false;

  return /{{(?:true|yes|2|false|no|1)}}/g.test(string);
};

export const topicVotingLabels = (string: string | undefined) => {
  return {
    label_01:
      string?.match(/{{(?:false|no|1)}}/g)?.[0].replace(/{{|}}/g, "") || "no",
    label_02:
      string?.match(/{{(?:true|yes|2)}}/g)?.[0].replace(/{{|}}/g, "") || "yes"
  };
};
