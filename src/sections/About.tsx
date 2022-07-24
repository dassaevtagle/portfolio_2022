import FullPageContainer from "../components/FullPageContainer"
import Title from "../components/Title"

function About () {
  return (
    <FullPageContainer>
      <Title>About me</Title>
      <section className="grid grid-cols-3 mx-36">
        <div className="md:col-span-2 bg-black">a</div>
        <div className="md:col-span-1 bg-black">a</div>
      </section>
    </FullPageContainer>
  )
}

export default About