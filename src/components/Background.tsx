import { CSSProperties, useEffect } from "react";
import Rellax from "rellax";
import {ReactComponent as BackgroundSVG} from '../assets/svg/backgroundB.svg'

function Background () {
  const styles: CSSProperties = {
    zIndex: '-1',
    position: 'absolute',
    maxWidth: '100%',
  }

  useEffect(() => {
    const rellax = new Rellax('.rellax')
    return rellax.destroy
  })

  return(
    <BackgroundSVG style={styles}/>
  )
}

export default Background