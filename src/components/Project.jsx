import play from "../../images/playbutton.png"
import githubicon from "../../images/github-mark.png"

const Project = ({ title, description, site, github, image }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={site} target="_blank"><img style={{width: 50, marginRight: 10}} src={play}></img></a>
              <a href={github} target="_blank"><img style={{width: 50}} src={githubicon}></img></a>
            </div>
          </div>
          <div className="col-md-5">
            <img src={image} className="img-fluid rounded"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
