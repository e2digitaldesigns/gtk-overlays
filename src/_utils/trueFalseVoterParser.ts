export const trueFalseVoterParser = (
  string: string | undefined,
  trueCount: number | undefined,
  falseCount: number | undefined
): string => {
  if (!string) return "";

  let replacedString = string.replace(
    /{{true}}/g,
    trueCount ? String(trueCount) : "0"
  );
  replacedString = replacedString.replace(
    /{{false}}/g,
    falseCount ? String(falseCount) : "0"
  );

  return replacedString;
};
