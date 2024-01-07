import React from "react";
import Project from "../components/Project";

// project data
const Portfolio = () => {
  const projects = [
    {
      title: 'Web APIs Challenge: Code Quiz',
      image: '/Users/victoriajacobo/Desktop/Module4.png',
      deployedLink: 'https://vjacobo.github.io/redesigned-palm-tree/',
      githubLink: 'https://github.com/VJacobo/redesigned-palm-tree'
    }
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
