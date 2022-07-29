import { CodepenIcon, ExternalIcon, GithubIcon, LinkedinIcon, UpworkIcon } from "../assets/svg/icons";

/**
 * Possible icons are:
 * -Codepen
 * -Github
 * -Linkedin
 * -Upwork
 * -External.
 * Default icon is 'External'.
 */
function Icon ({name} : {name: string}): JSX.Element {
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