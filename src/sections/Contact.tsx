import Title from "../components/Title"

function Contact () {
  return (
    <>
      <div className="bg-zinc-900 pb-20 pt-10 mt-36 rounded-t-3xl">
        <Title marginTop={false}>Contact</Title>
        <h1 className="text-3xl text-center mb-12 mt-20">
          Feel free to write me at <a className="outline">dassaev.tagle@gmail.com</a>
        </h1>
        <ul className="flex justify-center gap-x-16 pt-15">
          <li>LI</li>
          <li>CP</li>
          <li>HR</li>
          <li>GI</li>
        </ul>
      </div>
    </>
  )
}

export default Contact