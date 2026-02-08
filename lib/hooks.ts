import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export const useSectionInView = (value: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(value);
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return {
    ref,
  };
};
