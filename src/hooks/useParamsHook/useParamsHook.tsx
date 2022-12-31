import { Sections, SectionsCNN } from "./types";

const useParamsHook = () => {
  const params = new URLSearchParams(window.location.search);

  const showSection = (section: Sections | SectionsCNN) => {
    const param = params.get(section);
    const demo = params.get("demo");
    return demo === "1" || param === "1";
  };

  return { showSection };
};

export default useParamsHook;
