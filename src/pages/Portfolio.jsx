import Project from "../components/Project";
import image from "../../images/profpic.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "The Daily <div>",
      description: "A CMS-style social media site",
      image,
    },
    {
      title: "The Daily <div>",
      description: "A CMS-style social media site",
      image,
    },
  ];

  return (
    <div className="row">
      {portfolioItems.map(({ title, description, image }) => {
        return <Project title={title} description={description} image={image} />;
      })}
    </div>
  );
};

export default Portfolio;
