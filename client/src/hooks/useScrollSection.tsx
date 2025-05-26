import { useEffect, useRef } from "react";
import { usePortfolio, type Section } from "@/lib/stores/usePortfolio";

interface UseScrollSectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollSection(
  sectionId: Section,
  options: UseScrollSectionOptions = {}
) {
  const ref = useRef<HTMLElement>(null);
  const { setCurrentSection } = usePortfolio();
  const { threshold = 0.5, rootMargin = "0px" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(sectionId);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [sectionId, setCurrentSection, threshold, rootMargin]);

  return ref;
}

export function useScrollToSection() {
  const scrollToSection = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return scrollToSection;
}
