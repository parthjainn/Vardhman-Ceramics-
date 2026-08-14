import { useEffect } from "react";

export function useRevealMotion() {
  useEffect(() => {
    const animated = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      animated.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0 },
    );

    animated.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
