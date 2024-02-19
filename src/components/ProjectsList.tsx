import { CSSProperties, FunctionComponent, MouseEventHandler, ReactElement, ReactNode } from "react";
import ExternalLink from "./ExternalLink";
import Icon from "./Icon";
import '../assets/scss/components/ProjectsList.scss';
import { Project } from "../sections/Projects";


interface IProjectsList {
  children: ReactElement<BoxProps> | Array<ReactElement<BoxProps>>;
}

export const ProjectsList: FunctionComponent<IProjectsList> = ({children}: IProjectsList) => {
  return <div className="projects-list">{children}</div>
}

type BoxBaseProps = {
  onClick?: MouseEventHandler;
  children?: ReactNode;
  index: number;
}

type BoxProps = BoxBaseProps & Project

/** 
 *lgRows and lgColumns will span 2 places and only after lg breakpoint. 
*/
export function Box({
    name,
    image,
    description,
    sourceUrl,
    demoUrl,
    children,
    index
  }: BoxProps) {

  const flexDirection = index % 2 === 0 ? 'row' : 'row-reverse';

  return (
    <div className={`w-full lg:flex flex-${flexDirection}`}>
      <img src={image.url} alt={image.alt} className={`h-auto w-full lg:w-1/3 p-5`} />
      <div className="w-full lg:w-1/2 md:px-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">{name}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
}
