export function getKeyWithHighestValue(obj: {
  [key: string]: number;
}): string[] {
  let maxKeys: string[] = [];
  let maxValue = -Infinity;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] > maxValue) {
        maxKeys = [key];
        maxValue = obj[key];
      } else if (obj[key] === maxValue) {
        maxKeys.push(key);
      }
    }
  }

  return maxKeys;
}
