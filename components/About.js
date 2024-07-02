const About = () => {
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/man1.jpg" alt="" />
        </div>
        <div className="desc">
          <p>
            I am a Software Engineer passionate about creating seamless,
            user-friendly digital experiences. My journey showcases my commitment
            to continuous learning and growth. I am skilled in developing advanced
            solutions, designing intuitive UI components and mentoring junior
            developers. I excel in dynamic environments, driving innovation and
            delivering high-quality software with a strong sense of responsibility,
            attention to detail and a collaborative spirit.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Christoforos Rentifis
              </li>
              <li>
                <strong>Age:</strong> 34 Years
              </li>
              <li>
                <strong>Job:</strong> Web Developer
              </li>
              <li>
                <strong>Citizenship:</strong> Greece
              </li>
              <li>
                <strong>Residence: </strong> Athens
              </li>
              <li>
                <strong>E-mail:</strong> redifischris@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="files/RENTIFIS_CV.pdf" download="Resume Rentifis Christoforos" className="btn fill" data-text="Download CV">
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
