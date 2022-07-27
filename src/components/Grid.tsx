import { CSSProperties, ReactNode } from "react";
import '../assets/scss/components/Grid.scss';

/** 
 * 3-columns grid component.
 * 1-column on mobile.
*/
function Grid ({children}: {children: ReactNode}) {
  return <div className="grid-component">{children}</div>
}

type BoxProps = {
  image?: string;
  lgRow?: boolean;
  lgColumn?: boolean;
  children: ReactNode;
}

/** 
 *lgRows and lgColumns will span 2 places and only after lg breakpoint. 
*/
function Box({image, lgRow = false, lgColumn = false, children}: BoxProps) {
  const boxClass = generateBoxClass(lgColumn, lgRow);
  const styles: CSSProperties = image ? {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    filter: 'grayscale(0.8)',
  } : {};

  return (
    <div className={boxClass} style={styles}>
      {children}
    </div>
  )
}

function generateBoxClass(lgColumn: boolean, lgRow: boolean): string {
  const safeClassList = [
    'hover:shadow-md hover:shadow-highlight grid-component_box',
    'hover:shadow-md hover:shadow-highlight grid-component_box lg:col-span-2',
    'hover:shadow-md hover:shadow-highlight grid-component_box lg:row-span-2',
    'hover:shadow-md hover:shadow-highlight grid-component_box lg:col-span-2 lg:row-span-2',
  ]
  let className = safeClassList[0]
  if(lgColumn && !lgRow) className = safeClassList[1]
  if(!lgColumn && lgRow) className = safeClassList[2]
  if(lgColumn && lgRow) className = safeClassList[3]
  return className
}

export {
  Grid,
  Box
}