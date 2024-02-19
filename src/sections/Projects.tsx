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
      name: "Ricardo Acosta artist's website",
      description: ``,
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
    <FullPageContainer>
      <Title>Projects</Title>
      <div ref={projectsRef}>
        <div className="list-container mt-[6rem]" style={{opacity: '0'}}>
          <ProjectsList>
            {
              projectsCollection.map((project, i) => (
                <Box key={i} {...project} index={i}/>
              ))
            }
          </ProjectsList>
        </div>
      </div>
    </FullPageContainer>
  )
}

export default Projects