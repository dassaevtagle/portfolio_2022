import { CodepenIcon, ExternalIcon, GithubIcon, LinkedinIcon, UpworkIcon } from "../assets/svg/icons";

type IconType = "Codepen" | "Github" | "Linkedin" | "Upwork" | "External";

function Icon ({name}: {name: IconType}): JSX.Element {
  switch (name) {
    case 'Codepen':
      return <CodepenIcon/>
    case 'Github':
      return <GithubIcon/>
    case 'Linkedin':
      return <LinkedinIcon/>
    case 'Upwork':
      return <UpworkIcon/>
    case 'External':
    default:
      return <ExternalIcon/>
  }
}

export default Icon