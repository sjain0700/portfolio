import React from 'react';
import { profile } from '../data/portfolio';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>
        <a href={`mailto:${profile.email}`}>Email</a>
        <span aria-hidden="true"> · </span>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span aria-hidden="true"> · </span>
        <a href="#top">Back to top ↑</a>
      </p>
    </div>
  </footer>
);

export default Footer;
