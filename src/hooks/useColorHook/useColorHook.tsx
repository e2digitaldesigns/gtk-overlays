const useColorHook = (): string | undefined => {
  const params = new URLSearchParams(window.location.search);
  const search = "hex";
  let color = params.get("color");

  if (!color) return undefined;

  if (color.startsWith(search) && (color.length === 6 || color.length === 9)) {
    color = color.replace(search, "#");
  }

  return color;
};

export default useColorHook;
