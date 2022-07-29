import Title from "../components/Title"
import ExternalLink from "../components/ExternalLink"
import Icon from "../components/Icon"

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
          <li>
            <ExternalLink href="https://www.linkedin.com/in/rodolfo-dassaev-tagle-mesta-75471620a/">
              <Icon name="Linkedin" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://codepen.io/dassaevtagle">
              <Icon name="Codepen" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/dassaevtagle">
              <Icon name="Github"/>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.upwork.com/freelancers/~016d279c15b13329d6">
              <Icon name='Upwork'/>
            </ExternalLink>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact