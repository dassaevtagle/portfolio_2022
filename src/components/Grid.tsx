import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import ExternalLink from "./ExternalLink";
import Icon from "./Icon";
import '../assets/scss/components/Grid.scss';
import { Project } from "../sections/Projects";

/** 
 * 3-columns grid component.
 * 1-column on mobile.
*/
function Grid ({children}: {children: ReactNode}) {
  return <div className="grid-component">{children}</div>
}

type BaseProps = {
  onClick?: MouseEventHandler;
  children?: ReactNode;
}

type BoxProps = BaseProps & Project

/** 
 *lgRows and lgColumns will span 2 places and only after lg breakpoint. 
*/
function Box({name, image, description, sourceUrl, demoUrl, lgRow = false, lgColumn = false, onClick, children}: BoxProps) {
  const boxClass = generateBoxClass(lgColumn, lgRow);
  const styleBgImage: CSSProperties = image ? {
    backgroundImage: `url(${image})`,
  } : {};

  return (
    <div className={boxClass} style={styleBgImage} onClick={onClick}>
      <div className="overlay">
        <div className="relative float-right">
          <div className="inline-flex gap-x-3 m-3 text-highlight">
            {
              sourceUrl &&
              <ExternalLink href={sourceUrl}>
                <Icon name="Github"/>
              </ExternalLink>
            }
            {
              demoUrl &&
              <ExternalLink href={demoUrl}>
                <Icon name="External"/>
              </ExternalLink>
            }
          </div>
        </div>
        <div className="overlay_text">
          <div className="overlay_text-name">
            {name}
          </div>
          <div className="overlay_text-description">
            {description}
          </div>
          {children}
        </div>
      </div>
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