import Title from "../components/Title"
import {ReactComponent as CodepenIcon} from "../assets/svg/icons/codepen.svg"
import {ReactComponent as GithubIcon} from "../assets/svg/icons/github.svg"
import {ReactComponent as LinkedinIcon} from "../assets/svg/icons/linkedin.svg"
import {ReactComponent as UpworkIcon} from "../assets/svg/icons/upwork.svg"

import "../assets/scss/sections/Contact.scss"

function Contact () {
  return (
    <section>
      <div className="contact">
        <Title>Contact</Title>
        <h1 className="contact-mail">
          Feel free to write me at <a className="hover:underline" href="mailto:dassaev.tagle@gmail.com">dassaev.tagle@gmail.com</a>
        </h1>
        <ul className="contact-social">
          <li><LinkedinIcon /></li>
          <li><CodepenIcon /></li>
          <li><GithubIcon /></li>
          <li><UpworkIcon /></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact