"use client";
export const DesignSkills = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        <div className="skills">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}>
                  <span className="percent">75%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    glitcheUtils.dotResize();
    setTimeout(glitcheUtils.createSkillsDot, 1000);
  }, []);

  return (
      <div className="section skills">
        <div className="content">
          <div className="title">
            <div className="title_inner">Languages Skills</div>
          </div>
          <div className="skills">
            <ul>
              <li>
                <div className="name">Greek</div>
                <div className="progress">
                  <div className="percentage" style={{ width: '100%' }}>
                    <span className="percent">100%</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="name">English</div>
                <div className="progress">
                  <div className="percentage" style={{ width: '70%' }}>
                    <span className="percent">70%</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="name">Russian</div>
                <div className="progress">
                  <div className="percentage" style={{ width: '40%' }}>
                    <span className="percent">40%</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};
export const CodingSkills = () => {
  const skills = [
    { id: 1, title: 'React', value: 95 },
    { id: 2, title: 'Javascript', value: 90 },
    { id: 2, title: 'Typescript', value: 85 },
    { id: 3, title: 'HTML', value: 90 },
    { id: 4, title: 'CSS / SASS', value: 75 },
  ]
  return (
      <div className="section skills">
        <div className="content">
          <div className="title">
            <div className="title_inner">Coding Skills</div>
          </div>
          <div className="skills circles">
            <ul>
              {skills.map((skill) => (
                  <li key={skill.id}>
                    <div className="name">{skill.title}</div>
                    <div className={`progress p${skill.value}`}>
                      <div
                          className="percentage"
                          style={{ width: `${skill.value}%` }}
                      >
                        <span className="percent">{skill.value}%</span>
                      </div>
                      <span>{skill.value}%</span>
                      <div className="slice">
                        <div className="bar" />
                        <div className="fill" />
                      </div>
                    </div>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}
export const Knowledge = () => {
  return (
      <div className="section skills">
        <div className="content">
          <div className="title">
            <div className="title_inner">Knowledge</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <div className="name">Redux, Redux RTK, Redux Saga</div>
            </li>
            <li>
              <div className="name">MobX</div>
            </li>
            <li>
              <div className="name">Bootstrap</div>
            </li>
            <li>
              <div className="name">Styled Components</div>
            </li>
            <li>
              <div className="name">Ant Design</div>
            </li>
            <li>
              <div className="name">Rest API</div>
            </li>
            <li>
              <div className="name">GraphQL</div>
            </li>
            <li>
              <div className="name">WebSockets</div>
            </li>
            <li>
              <div className="name">Moment.js, day.js, date-fns</div>
            </li>
            <li>
              <div className="name">useForm</div>
            </li>
            <li>
              <div className="name">Lodash</div>
            </li>
            <li>
              <div className="name">Responsive Web Design</div>
            </li>
            <li>
              <div className="name">UI/UX Design</div>
            </li>
            <li>
              <div className="name">Code Reviews</div>
            </li>
            <li>
              <div className="name">Troubleshooting and Debugging</div>
            </li>
            <li>
              <div className="name">Version Control (Git)</div>
            </li>
            <li>
              <div className="name">Google Maps API</div>
            </li>
            <li>
              <div className="name">Geolocation API</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { glitcheUtils } from '@/utility'
import { Fragment, useEffect } from "react";
const Skills = ({
  design = false,
  coding = true,
  knowledge = true,
  languages = true,
}) => {
  return (
    <Fragment>
      {design && <DesignSkills />}
      {coding && <CodingSkills />}
      {knowledge && <Knowledge />}
      {languages && <LanguagesSkills />}
    </Fragment>
  );
};
export default Skills;
