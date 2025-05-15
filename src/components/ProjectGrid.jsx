import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectGrid.css';

// Local image paths
const images = {
  arShopping: '/nike-ar.png',
  wireframe: '/grid.jpeg',
  gucci: '/gucci.png',
  kids: '/kids.jpeg'
};

// Project data
const projects = [
  {
    id: 'ar-shopping',
    title: 'AR Shopping',
    image: images.arShopping,
  },
  {
    id: 'wireframe',
    title: '3D Wireframe',
    image: images.wireframe,
  },
  {
    id: 'gucci',
    title: 'Gucci Fashion',
    image: images.gucci,
  },
  {
    id: 'kids',
    title: 'Kids Fashion',
    image: images.kids,
  }
];

const ProjectGrid = () => {
  return (
    <div className="projects">
      {projects.map((project) => (
        <Link 
          key={project.id} 
          to={`/project/${project.id}`} 
          className="project-link"
        >
          <div className={`project ${project.id}`}>
            <div className="project-inner">
              <img src={project.image} alt={project.title} />
            </div>
            <h2>{project.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid; 