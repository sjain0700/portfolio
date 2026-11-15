import React from 'react';
import { about, aiWork } from '../data/portfolio';

function About() {
  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <p className="eyebrow">About</p>
          <h2 className="section__title">Mobile apps at scale, from architecture to app store</h2>
          <div className="about">
            {about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="ai">
        <div className="container">
          <p className="eyebrow">Generative AI</p>
          <h2 className="section__title">AI in the product and in the workflow</h2>
          <p className="section__lead">{aiWork.intro}</p>
          <div className="ai-grid">
            {aiWork.points.map(({ title, text }) => (
              <article key={title} className="card ai-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <h3 className="subhead">Certifications</h3>
          <ul className="certs">
            {aiWork.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
