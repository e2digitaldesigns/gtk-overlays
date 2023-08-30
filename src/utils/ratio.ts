export const setHeight = (width: number) => {
  const ratio = 16 / 9;
  return width / ratio;
};

const setWidth = (height: number) => {
  const ratio = 16 / 9;
  return height * ratio;
};
