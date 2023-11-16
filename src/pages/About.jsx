import profpic from "../../images/profpic.png"

const About = () => {
  return (
    <div className="row">
      <div className="col-md-9 m-2">
        <h1 className="rainbow-text mb-3">Evan Vandenberg</h1>
        <div className="border border-3 rounded-4 p-3">
          <p style={{fontSize: 18}} className="m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt repellat quibusdam quod tempora suscipit? Culpa nihil maxime possimus repudiandae natus reprehenderit at perferendis
            amet laborum similique. Quo, ad reiciendis!
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
