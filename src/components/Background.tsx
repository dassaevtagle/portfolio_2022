import { CSSProperties, useEffect, useRef } from "react";
import Rellax from "rellax";
import {ReactComponent as BackgroundSVG} from '../assets/svg/background.svg'
import useOnScreen from "../hooks/useOnScreen";

function Background () {
  const styles: CSSProperties = {
    zIndex: '-1',
    position: 'absolute',
    maxWidth: '100%',
    opacity: 0,
    transition: 'linear 0.2s'
  }

  const backgroundRef = useRef<HTMLElement>(null)
  const isOnScreen = useOnScreen({ref: backgroundRef})

  useEffect(() => {
    const rellax = new Rellax('.rellax')
    if(backgroundRef.current && isOnScreen) {
      backgroundRef.current.style.opacity = '1'
    }
    return () => {
      rellax.destroy()
    }
  }, [isOnScreen, backgroundRef])

  return(
    <BackgroundSVG style={styles} ref={backgroundRef}/>
  )
}

export default Background