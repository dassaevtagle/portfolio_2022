import { CSSProperties, ReactNode } from "react";
import {ReactComponent as GithubIcon} from "../assets/svg/icons/github.svg"
import {ReactComponent as ExternalIcon} from "../assets/svg/icons/external.svg"
import ExternalLink from "./ExternalLink";
import '../assets/scss/components/Grid.scss';

/** 
 * 3-columns grid component.
 * 1-column on mobile.
*/
function Grid ({children}: {children: ReactNode}) {
  return <div className="grid-component">{children}</div>
}

type BoxProps = {
  name: string;
  image?: string;
  sourceUrl?: string;
  demoUrl?: string;
  lgRow?: boolean;
  lgColumn?: boolean;
  children?: ReactNode;
}

/** 
 *lgRows and lgColumns will span 2 places and only after lg breakpoint. 
*/
function Box({name, image, sourceUrl, demoUrl, lgRow = false, lgColumn = false, children}: BoxProps) {
  const boxClass = generateBoxClass(lgColumn, lgRow);
  const styleBgImage: CSSProperties = image ? {
    backgroundImage: `url(${image})`,
  } : {};

  return (
    <div className={boxClass} style={styleBgImage}>
      <div className="overlay">
        <div className="relative float-right">
          <div className="inline-flex gap-x-4 m-6 text-highlight">
            {
              sourceUrl &&
              <ExternalLink href={sourceUrl}>
                <GithubIcon/>
              </ExternalLink>
            }
            {
              demoUrl &&
              <ExternalLink href={demoUrl}>
                <ExternalIcon/>
              </ExternalLink>
            }
          </div>
        </div>
        <div className="overlay_text">
          {name}
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