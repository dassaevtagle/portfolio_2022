import { Project } from "../sections/Projects"
import { forwardRef, useImperativeHandle, useRef } from "react"
import '../assets/scss/components/Lightbox.scss'

type LightboxProps = {
  projects: Project[];
}

export type LightboxHandle = {
  openLightbox: (id: number) => void;
}
const Lightbox = forwardRef<LightboxHandle, LightboxProps>(({projects}, ref) => {
  const container =  useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    openLightbox(id: number) {
      open(id)
    }
  }))

  function open(projectId: number) {
    let selectedProject: Project = projects[projectId];
    if (container.current) {
      let body = document.body;
      let containerDiv = container.current
      let img = containerDiv.firstChild as HTMLImageElement;
      let nameDiv = containerDiv.children[1] as HTMLDivElement;
      let descriptionDiv = containerDiv.children[2] as HTMLDivElement;

      body.style.overflow = 'hidden';
      containerDiv.style.display = 'grid';
      img.src = selectedProject.image;
      img.alt = selectedProject.name;
      nameDiv.innerText = selectedProject.name
      descriptionDiv.innerText = selectedProject.description
    }
  }
    
  function close() {
    if(container.current) {
      let body = document.body;
      body.style.overflow = 'auto';
      container.current.style.display = 'none'
    }
  }

  return (
    <div className="lightbox" ref={container} onClick={close}>
      <img className="lightbox_image" alt=""/>
      <div className="lightbox_name"></div>
      <div className="lightbox_caption"></div>
    </div>
  )
})

export default Lightbox