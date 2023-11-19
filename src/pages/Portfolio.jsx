import Project from "../components/Project";
import dailydiv from "../../images/dailydiv.png";
import weatherapp from "../../images/weatherapp.png";
import passgen from "../../images/passgen.png";
import travelassist from "../../images/travelassist.png";
import nextquest from "../../images/nextquest.png"
import socialsync from "../../images/socialsync.png"

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "The Daily <div>",
      description: "A CMS-style social media site.",
      site: "https://daily-div-c5fddf51edce.herokuapp.com",
      github: "https://github.com/vandem02/Tech-Blog",
      image: dailydiv,
    },
    {
      title: "Weather Dashboard",
      description: "A weather app that utilizes OpenWeather API.",
      site: "https://vandem02.github.io/WeatherApp",
      github: "https://github.com/vandem02/WeatherApp",
      image: weatherapp,
    },
    {
      title: "Password Generator",
      description: "A quick and easy password generator.",
      site: "https://vandem02.github.io/PasswordGenerator",
      github: "https://github.com/vandem02/PasswordGenerator",
      image: passgen,
    },
    {
      title: "Travel Assistant",
      description: "A tool for calculating distance and travel time between destinations. Also displays weather.",
      site: "https://aidev13.github.io/travel-assistance",
      github: "https://github.com/aidev13/travel-assistance",
      image: travelassist,
    },
    {
      title: "NextQuest",
      description: "A video game to-do tracker for the busy gamer.",
      site: "https://next-quest-app-ede904b63665.herokuapp.com",
      github: "https://github.com/LShankKirchner017/nextQuest-uofw",
      image: nextquest,
    },
    {
      title: "SocialSync",
      description: "A public calendar app for scheduling hangouts with your friends.",
      site: "https://socialsync-122645211db0.herokuapp.com",
      github: "https://github.com/npokrandt/socialsync",
      image: socialsync,
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
