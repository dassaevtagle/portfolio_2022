import { RefObject, useEffect, useState } from "react";

function useOnScreen( ref: RefObject<HTMLElement>, observerOptions?: IntersectionObserverInit ) {

    const [isOnScreen, setIsOnScreen] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
      setIsOnScreen(entry.isIntersecting)
    }, observerOptions)
    ref.current && observer.observe(ref.current)
    return () => {
      observer && observer.disconnect()
    }
  }, [ref, observerOptions])

  return isOnScreen
}

export default useOnScreen