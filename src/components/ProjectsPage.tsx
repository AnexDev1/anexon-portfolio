import React from 'react';
import './ProjectsPage.css';

interface Project {
  id: number;
  imageUrl: string;
  appName: string;
  description?: string;
}

// ... (projectsData remains the same) ...
const projectImageUrl = "https://img.freepik.com/premium-vector/realistic-smartphone-mockup-device-ui-ux-mockup-presentation-template-cellphone-frame-with-blank-display-isolated-templates-phone-different-angles-views-3d-isometric-cell-phone_162862-1373.jpg";

const projectsData: Project[] = [
  { id: 1, imageUrl: projectImageUrl, appName: "E-commerce App" },
  { id: 2, imageUrl: projectImageUrl, appName: "Social Media Platform" },
  { id: 3, imageUrl: projectImageUrl, appName: "Task Manager Pro" },
  { id: 4, imageUrl: projectImageUrl, appName: "Fitness Tracker" },
  { id: 5, imageUrl: projectImageUrl, appName: "Recipe Finder" },
  { id: 6, imageUrl: projectImageUrl, appName: "Travel Planner" },
  { id: 7, imageUrl: projectImageUrl, appName: "Music Streamer" },
];


interface ProjectsPageProps {
  onNavigateHome?: () => void; // Optional prop for navigating back
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="projects-page-container">
      {/* Simple Back Button - style as needed */}
      {onNavigateHome && (
        <button onClick={onNavigateHome} className="projects-page-back-button">
          &larr; Back Home 
        </button>
      )}
      <h1 className="projects-page-title">My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-image-container">
              <img src={project.imageUrl} alt={project.appName} className="project-image" />
            </div>
            <p className="project-name">{project.appName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;