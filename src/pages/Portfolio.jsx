import Project from "../components/Project";
import dailydiv from "../../images/dailydiv.png";
import weatherapp from "../../images/weatherapp.png";
import passgen from "../../images/passgen.png";
import travelassist from "../../images/travelassist.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "The Daily <div>",
      description: "A CMS-style social media site",
      site: "https://daily-div-c5fddf51edce.herokuapp.com",
      github: "https://github.com/vandem02/Tech-Blog",
      image: dailydiv,
    },
    {
      title: "Weather Dashboard",
      description: "A weather app that utilizes OpenWeather API",
      site: "https://vandem02.github.io/WeatherApp",
      github: "https://github.com/vandem02/WeatherApp",
      image: weatherapp,
    },
    {
      title: "Password Generator",
      description: "A quick and easy password generator",
      site: "https://vandem02.github.io/PasswordGenerator",
      github: "https://github.com/vandem02/PasswordGenerator",
      image: passgen,
    },
    {
      title: "Travel Assistant",
      description: "A tool for calculating distance and travel time between destinations. Also displays weather.",
      site: "https://aidev13.github.io/travel-assistance/",
      github: "https://github.com/aidev13/travel-assistance",
      image: travelassist,
    },
  ];

  return (
    <div className="row">
      {portfolioItems.map(({ title, description, site, github, image }) => {
        return <Project title={title} description={description} site={site} github={github} image={image} key={Math.random()} />;
      })}
    </div>
  );
};

export default Portfolio;
