import React from 'react';
import { featuredProjects, projects } from '../data/portfolio';

const initials = (title) =>
  title
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

function FeaturedCard({ project }) {
  const { title, client, category, description, highlights, tech, link, linkLabel, accent } = project;
  return (
    <article className={`card featured accent-${accent}`}>
      <div className="featured__head">
        <div className="app-icon">{initials(title)}</div>
        <div>
          <p className="featured__meta">{client} · {category}</p>
          <h3 className="featured__title">{title}</h3>
        </div>
      </div>
      <p className="featured__desc">{description}</p>
      <ul className="checklist checklist--compact">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <ul className="chips">
        {tech.map((t) => (
          <li key={t} className="chip chip--sm">{t}</li>
        ))}
      </ul>
      {link && (
        <a className="featured__link" href={link} target="_blank" rel="noopener noreferrer">
          {linkLabel || 'View app'} →
        </a>
      )}
    </article>
  );
}

function ProjectCard({ project }) {
  const { title, category, platform, description, link, thumbnail } = project;
  const Tag = link ? 'a' : 'article';
  const linkProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Tag className={`card project ${link ? 'project--link' : ''}`} {...linkProps}>
      <div className="project__head">
        {thumbnail ? (
          <img className="project__thumb" src={thumbnail} alt="" />
        ) : (
          <div className="app-icon app-icon--sm">{initials(title)}</div>
        )}
        <div>
          <h3 className="project__title">{title}</h3>
          <p className="project__category">{category}</p>
        </div>
      </div>
      <p className="project__desc">{description}</p>
      <p className="project__platform">{platform}</p>
      {link && <span className="project__cta">View app →</span>}
    </Tag>
  );
}

const Projects = () => (
  <section className="section section--alt" id="projects">
    <div className="container">
      <p className="eyebrow">Projects</p>
      <h2 className="section__title">Featured work</h2>
      <div className="featured-grid">
        {featuredProjects.map((p) => (
          <FeaturedCard key={p.id} project={p} />
        ))}
      </div>

      <h3 className="subhead">More apps I’ve built</h3>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
