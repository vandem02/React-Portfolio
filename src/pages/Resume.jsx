import resume from "../../images/Resume.pdf"

const Resume = () => {
  return (
    <p className="text-center m-3">You can download a copy of my resume <a href={resume} download>here.</a></p>
  )
}

export default Resume;