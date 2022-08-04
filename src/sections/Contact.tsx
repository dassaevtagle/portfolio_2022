import Title from "../components/Title"
import ExternalLink from "../components/ExternalLink"
import Icon, { IconType } from "../components/Icon"

import "../assets/scss/sections/Contact.scss"

type ContactItem = {
  icon: IconType;
  href: string;
}

function Contact () {

  //To add more icons, add SVG and register them on assets/svg/icons/index.tsx and on components/Icon.tsx
  const contactList: ContactItem[] = [
    {
      icon: 'Linkedin',
      href: 'https://www.linkedin.com/in/rodolfo-dassaev-tagle-mesta-75471620a/'
    },
    {
      icon: 'Codepen',
      href: 'https://codepen.io/dassaevtagle'
    },
    {
      icon: 'Github',
      href: 'https://github.com/dassaevtagle'
    },
    {
      icon: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~016d279c15b13329d6'
    }
  ]

  return (
    <section>
      <div className="contact">
        <Title>Contact</Title>
        <h1 className="contact-mail">
          Feel free to write me at&nbsp;
          <ExternalLink type="hover" href="mailto:dassaev.tagle@gmail.com">dassaev.tagle@gmail.com</ExternalLink>
        </h1>
        <ul className="contact-social">
          {
            contactList.map(({icon, href}, idx) => (
              <li key={idx}>
                <ExternalLink href={href}>
                  <Icon name={icon}/>
                </ExternalLink>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Contact