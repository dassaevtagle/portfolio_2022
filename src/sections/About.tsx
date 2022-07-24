import FullPageContainer from "../components/FullPageContainer"
import Title from "../components/Title"
import ProfileBlack from "../assets/img/profile-black.jpg"
import ProfileWhite from "../assets/img/profile-white.jpg"

function About () {
  return (
    <FullPageContainer>
      <Title>About me</Title>
      <section className="sm:flex px-4 sm:px-20 py-12">
        <div className="sm:w-2/3 font-extralight text-gray-50 p-8">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. 
          Ex alias fugiat animi! Veritatis enim possimus
          reprehenderit quia mollitia minima ullam eius ut nostrum harum!
          Odit ullam eum voluptates omnis repellendus.
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. 
          Ex alias fugiat animi! Veritatis enim possimus
          reprehenderit quia mollitia minima ullam eius ut nostrum harum!
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. 
          Ex alias fugiat animi! Veritatis enim possimus
          reprehenderit quia mollitia minima ullam eius ut nostrum harum!
          
        </div>
        <div className="sm:w-1/3">
          <img src={ProfileBlack} alt="Me" className="rounded" />
        </div>
      </section>
    </FullPageContainer>
  )
}

export default About