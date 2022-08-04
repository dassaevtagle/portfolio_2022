import { BurgerIcon, CloseIcon, CodepenIcon, ExternalIcon, GithubIcon, LinkedinIcon, UpworkIcon } from "../assets/svg/icons";

export type IconType = "Codepen" | "Github" | "Linkedin" | "Upwork" | "External" | "Burger" | "Close";

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
    case 'Burger':
      return <BurgerIcon/>
    case 'Close':
      return <CloseIcon/>
    case 'External':
    default:
      return <ExternalIcon/>
  }
}

export default Icon