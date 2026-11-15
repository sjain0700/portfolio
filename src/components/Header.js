import React from 'react';
import { profile, stats } from '../data/portfolio';

const Header = () => (
  <header className="hero" id="top">
    <div className="container">
      <p className="hero__badge">
        <span className="dot" /> {profile.availability} · {profile.location}
      </p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__role">{profile.role}</p>
      <p className="hero__tagline">{profile.tagline}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#projects">See my work</a>
        <a className="btn btn--ghost" href={`mailto:${profile.email}`}>Email me</a>
        <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <ul className="stats">
        {stats.map(({ value, label }) => (
          <li key={label} className="stat">
            <span className="stat__value">{value}</span>
            <span className="stat__label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

export default Header;
