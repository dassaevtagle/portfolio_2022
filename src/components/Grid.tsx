import { ReactNode } from "react";
import './Grid.scss'

/** 
 * 3-columns grid component.
 * 1-column on mobile.
*/
function Grid ({children}: {children: ReactNode}) {
  return <div className="grid-component">{children}</div>
}

type BoxProps = {
  lgRow?: boolean;
  lgColumn?: boolean;
  children: ReactNode;
}

/** 
 *lgRows and lgColumns will span 2 places and only after lg breakpoint. 
*/
function Box({lgRow = false, lgColumn = false, children}: BoxProps) {
  const boxClass = generateBoxClass(lgColumn, lgRow);
  return (
    <div className={boxClass}>
      {children}
    </div>
  )
}

function generateBoxClass(lgColumn: boolean, lgRow: boolean): string {
  const safeClassList = [
    'grid-component_box',
    'grid-component_box lg:col-span-2',
    'grid-component_box lg:row-span-2',
    'grid-component_box lg:col-span-2 lg:row-span-2',
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