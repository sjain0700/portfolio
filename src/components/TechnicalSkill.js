import React from 'react';
import { skills, leadership } from '../data/portfolio';

const TechnicalSkill = () => (
  <section className="section" id="skills">
    <div className="container">
      <p className="eyebrow">Skills</p>
      <h2 className="section__title">Technical skills</h2>
      <div className="skills">
        {skills.map(({ group, items }) => (
          <div key={group} className="skills__group">
            <h3>{group}</h3>
            <ul className="chips">
              {items.map((item) => (
                <li key={item} className="chip">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="subhead">Leadership &amp; engineering practice</h3>
      <ul className="checklist">
        {leadership.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default TechnicalSkill;
