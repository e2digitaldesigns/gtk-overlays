export const trueFalseVoterParser = (
  string: string | undefined,
  trueCount: number | undefined,
  falseCount: number | undefined
): string => {
  if (!string) return "";

  let replacedString = string.replace(
    /{{(?:true|yes|2)}}/g,
    trueCount ? String(trueCount) : "0"
  );

  replacedString = replacedString.replace(
    /{{(?:false|no|1)}}/g,
    falseCount ? String(falseCount) : "0"
  );

  return replacedString;
};

export const hasTrueFalseVoting = (string: string | undefined): boolean => {
  if (!string) return false;

  return (
    /{{(?:true|yes|2)}}/g.test(string) && /{{(?:false|no|1)}}/g.test(string)
  );
};

export const trueFalseVoterLabels = (string: string | undefined) => {
  return {
    no: string?.match(/{{(?:false|no|1)}}/g)?.[0].replace(/{{|}}/g, "") || "no",
    yes:
      string?.match(/{{(?:true|yes|2)}}/g)?.[0].replace(/{{|}}/g, "") || "yes"
  };
};
