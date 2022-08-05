import Title from "../components/Title"
import ExternalLink from "../components/ExternalLink"
import Icon, { IconType } from "../components/Icon"

import "../assets/scss/sections/Contact.scss"
import { useEffect, useRef } from "react"
import useOnScreen from "../hooks/useOnScreen"
import useWidth from "../hooks/useWidth"

type ContactItem = {
  icon: IconType;
  href: string;
}

function Contact () {
  const contactRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(contactRef, { rootMargin: '130px' })
  const {isMobile} = useWidth()

  useEffect(() => {
    if (contactRef.current){
      if(!isMobile){
        isOnScreen && contactRef.current.classList.add('contact-visible')
        !isOnScreen && contactRef.current.classList.remove('contact-visible')
      } else {
        contactRef.current.classList.add('contact-visible')
      }
    }
  }, [contactRef, isOnScreen, isMobile])

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
    <section className="overflow-hidden">
      <div ref={contactRef} className="contact">
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