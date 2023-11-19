import profpic from "../../images/profpic.png"

const About = () => {
  return (
    <div className="row">
      <div className="col-md-9 m-2">
        <h1 className="rainbow-text mb-3">Evan Vandenberg</h1>
        <div className="border border-3 rounded-4 p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
          <p className="m-0">
            Hi there! My name is Evan, and I am a full-stack developer from Appleton, Wisconsin. I am 22 years old and currently looking for available full-time positions. I recently graduated from the University of Wisconsin - Green Bay and completed a web development program offered by edX, which is endorsed by prestigious institutions such as the University of Wisconsin - Madison and Harvard, among others. I interned at J.J. Keller for 1 year, which is where I got most of my React experience from. My problem-solving skills are very developed, and though my leadership skills need a bit of work, I love working with others. I am very excited for my future as a web developer to begin!
          </p>
        </div>
      </div>
      <div className="col m-2">
        <img className="w-100 border border-5" src={profpic}></img>
      </div>
    </div>
  );
};

export default About;
