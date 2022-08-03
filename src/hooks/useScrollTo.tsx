import { RefObject } from "react";

function useScrollTo() {
  const scrollTo = (ref: RefObject<HTMLElement>)  => {
    if (ref.current) {
      const yOffset = -60;
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }
  return scrollTo
}

export default useScrollTo