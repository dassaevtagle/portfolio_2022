import { FunctionComponent, MouseEventHandler, ReactElement, ReactNode } from "react";
import '../assets/scss/components/ProjectsList.scss';
import { Project } from "../sections/Projects";
import ExternalLink from "./ExternalLink";
import { ExternalIcon } from "../assets/svg/icons";


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

export function Box({
    name,
    image,
    description,
    demoUrl,
    index
  }: BoxProps) {

  const flexDirection = index % 2 === 0 ? 'row' : 'row-reverse';
  const float = index % 2 === 0 ? 'float-end' : 'float-start';

  return (
    <div className={`w-full lg:flex flex-${flexDirection}`}>
      <img src={image.url} alt={image.alt} className={`h-auto w-full lg:w-1/3 m-5 rounded-xl`} />
      <div className="w-full lg:w-1/2 md:px-8">
        <h2 className="text-3xl text-gray-100 mb-2">{name}</h2>
        <p className="text-gray-200 my-7 py-3 px-4 bg-gray-700 bg-opacity-70 rounded-xl">{description}</p>
        {
          demoUrl && (
          <ExternalLink
            classes={`${float} rounded-lg py-3 px-6 border-solid border-2 hover:border-gray-300 hover:text-gray-300`}
            href={demoUrl}>
              Demo
            <span className="inline-flex ml-2 my-auto align-text-bottom">
              <ExternalIcon/>
            </span>
          </ExternalLink>
          )}
      </div>
    </div>
  );
}
