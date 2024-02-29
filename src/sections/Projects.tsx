import { useRef, useEffect } from "react"
import FullPageContainer from "../components/FullPageContainer"
import { Box, ProjectsList } from "../components/ProjectsList"
import Title from "../components/Title"

import RicardoAcostaWeb from '../assets/img/ricardoacostamusic.png'
import useOnScreen from "../hooks/useOnScreen"
import anime from "animejs"
import useWidth from "../hooks/useWidth"

export type Project = {
  image: {
    url: string;
    alt: string;
  };
  name: string;
  description: string;
  sourceUrl?: string;
  demoUrl?: string;
}

function Projects() {
  const projectsCollection: Project[] = [
    {
      image: {
        url: RicardoAcostaWeb,
        alt: "Web screenshot"
      },
      name: "Artist website (Ricardo Acosta)",
      description: `I collaborated with a designer to transform our Ricardo's artistic vision into an elegant website. 
      We used Figma for design and then built the site as a React SPA. The site is hosted on a Digital Ocean NodeJS App and the content is managed by the client through a CMS (Strapi).`,
      demoUrl: 'https://ricardoacostamusic.com',
    }
  ]


  const projectsRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useWidth()
  const ROOT_MARGIN = isMobile ? '0px' : '-300px'
  const isOnScreen = useOnScreen({
    ref: projectsRef,
    observerOptions:{
      rootMargin: ROOT_MARGIN
    },
    triggerOnce: true
  })
  const animate = () => {
    const tl = anime.timeline()
    tl
    .add({
      targets: '.list-container',
      opacity: [0, 1],
      easing: 'easeInOutCirc',
      duration: 700,
    })

  }
  useEffect(() => {
    if(projectsRef.current && isOnScreen) {
      animate()
    }
  }, [projectsRef, isOnScreen])
  

  return (
    <div className="my-44">
      <div className="-mb-32">
        <Title>Projects</Title>
        <div ref={projectsRef}>
          <div className="list-container mt-[7rem]" style={{opacity: '0'}}>
            <ProjectsList>
              {
                projectsCollection.map((project, i) => (
                  <Box key={i} {...project} index={i}/>
                  ))
                }
            </ProjectsList>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects