const Footer = () => {
  return (
    <div className="mx-auto row mt-5" style={{ width: 400 }}>
      <p className="col-12 text-center">&copy; Evan Vandenberg - {new Date().getFullYear()}</p>
      <a className="col-4" href="https://github.com/vandem02" target="_blank">
        <img alt="Github Badge" src="https://img.shields.io/badge/Github-%23181717?style=for-the-badge&logo=github"></img>
      </a>
      <a className="col-4" href="https://www.linkedin.com/in/evan-vandenberg-0565422a0">
        <img alt="LinkedIn Badge" src="https://img.shields.io/badge/LinkedIn-%230A66C2?style=for-the-badge&logo=linkedin"></img>
      </a>
      <a className="col-4" href="https://www.facebook.com/Tronsnake">
        <img alt="Facebook Badge" src="https://img.shields.io/badge/facebook-%230866FF?style=for-the-badge&logo=facebook"></img>
      </a>
    </div>
  );
};

export default Footer;
