export const trueFalseVoterParser = (
  string: string | undefined,
  trueCount: number,
  falseCount: number
) => {
  if (!string) return "";

  let replacedString = string.replace(/{{true}}/g, String(trueCount));
  replacedString = replacedString.replace(/{{false}}/g, String(falseCount));

  return replacedString;
};
