import React from 'react';
import { profile } from '../data/portfolio';

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <p className="eyebrow">Contact</p>
        <h2 className="section__title">Let’s build something together</h2>
        <p className="section__lead">
          {profile.availability}. Based in Dubai and open to roles in Abu Dhabi.
        </p>
        <div className="contact__grid">
          <a className="card contact__item" href={`mailto:${profile.email}`}>
            <span className="contact__label">Email</span>
            <span className="contact__value">{profile.email}</span>
          </a>
          {profile.phones.map(({ label, value, href }) => (
            <a key={value} className="card contact__item" href={href} target="_blank" rel="noopener noreferrer">
              <span className="contact__label">{label}</span>
              <span className="contact__value">{value}</span>
            </a>
          ))}
          <a className="card contact__item" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="contact__label">LinkedIn</span>
            <span className="contact__value">sunil-jain-a5057520</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
