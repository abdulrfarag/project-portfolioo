import React from 'react';

function Project() {

  // Replace links with social media profiles
  const projectss = [
    {
      name: "mern",
      link: "https://github.com/"
    },
    {
      name: "MVC",
      link: "https://www.linkedin.com/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]

  return (
    <project className="project">
      {projectss.map(projects =>
      (
        <a href={projects.link} key={projects.name} target="_blank" rel="noopener noreferrer"><i className={projects.name}></i></a>
      )
        )}
    </project>
  );
}

export default Project;
