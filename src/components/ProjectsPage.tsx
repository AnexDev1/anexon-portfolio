import React from 'react';
import './ProjectsPage.css';

interface Project {
  id: number;
  imageUrl: string;
  appName: string;
  description?: string;
}

const projectImageUrl = "https://img.freepik.com/premium-vector/realistic-smartphone-mockup-device-ui-ux-mockup-presentation-template-cellphone-frame-with-blank-display-isolated-templates-phone-different-angles-views-3d-isometric-cell-phone_162862-1373.jpg";

const projectsData: Project[] = [
  { 
    id: 1, 
    imageUrl: projectImageUrl, 
    appName: "Green Delivery App", 
    description: "Delivery app with Chapa payment integration, real-time tracking, and smooth transactions." 
  },
  { 
    id: 2, 
    imageUrl: projectImageUrl, 
    appName: "JiThub – AI Educational App", 
    description: "Student platform with ID registration, AI assistant, scheduling, and reminders." 
  },
  { 
    id: 3, 
    imageUrl: projectImageUrl, 
    appName: "JMarket – E-commerce Platform", 
    description: "Marketplace app with product listings, real-time updates, authentication, and checkout." 
  },
  { 
    id: 4, 
    imageUrl: projectImageUrl, 
    appName: "Eye Clinic Management App", 
    description: "Patient management system for appointments, records, and revenue tracking." 
  },
  { 
    id: 5, 
    imageUrl: projectImageUrl, 
    appName: "RentBet – Home Rental App", 
    description: "Real estate app with secure in-app chat for renters and property owners." 
  },
  { 
    id: 6, 
    imageUrl: projectImageUrl, 
    appName: "Echolog – Mood Tracker & Voice Journaling App", 
    description: "Tracks moods with voice notes, daily streaks, and AI feedback. (Published on Play Store)" 
  },
  {
    id: 7,
    imageUrl: projectImageUrl,
    appName: "Taskify – Team Task Manager",
    description: "Collaborative task management app with Kanban board, notifications, and analytics."
  },
  {
    id: 8,
    imageUrl: projectImageUrl,
    appName: "FitTrack – Fitness & Diet App",
    description: "Personal fitness tracker with workout plans, meal logging, and progress charts."
  },
  {
    id: 9,
    imageUrl: projectImageUrl,
    appName: "EventEase – Event Planning App",
    description: "Event organizer with RSVP, reminders, and vendor management for seamless events."
  },
  {
    id: 10,
    imageUrl: projectImageUrl,
    appName: "BookNest – Digital Library App",
    description: "E-library app for borrowing, reading, and reviewing books with social features."
  },
  {
    id: 11,
    imageUrl: projectImageUrl,
    appName: "TravelMate – Trip Planner",
    description: "Travel planning app with itinerary builder, expense tracking, and offline maps."
  },
  {
    id: 12,
    imageUrl: projectImageUrl,
    appName: "ShopSmart – Grocery List & Deals",
    description: "Smart grocery list app with price comparison, deals, and recipe suggestions."
  },
  {
    id: 13,
    imageUrl: projectImageUrl,
    appName: "HealthSync – Telemedicine Platform",
    description: "Virtual doctor visits, appointment scheduling, and e-prescriptions for clinics and patients."
  },
  {
    id: 14,
    imageUrl: projectImageUrl,
    appName: "Invoicely – Simple Invoice Generator",
    description: "Create, send, and track invoices for freelancers and small businesses."
  },
  {
    id: 15,
    imageUrl: projectImageUrl,
    appName: "PetPal – Pet Care Organizer",
    description: "Pet health tracker, reminders for vet visits, and adoption community features."
  },
  {
    id: 16,
    imageUrl: projectImageUrl,
    appName: "LanguaLearn – Language Practice App",
    description: "Language learning with flashcards, quizzes, and AI-powered conversation practice."
  },
  {
    id: 17,
    imageUrl: projectImageUrl,
    appName: "BudgetBuddy – Personal Finance App",
    description: "Expense tracking, budgeting, and financial goal setting for individuals and families."
  },
  {
    id: 18,
    imageUrl: projectImageUrl,
    appName: "Artify – Digital Art Portfolio",
    description: "Showcase, sell, and share digital artwork with a creative community."
  },
  {
    id: 19,
    imageUrl: projectImageUrl,
    appName: "QuizMaster – Trivia & Quiz App",
    description: "Create, play, and share quizzes on any topic with friends and the public."
  },
  {
    id: 20,
    imageUrl: projectImageUrl,
    appName: "SafeHome – Smart Home Controller",
    description: "Control and monitor smart home devices, security, and automation from one app."
  },
];


interface ProjectsPageProps {
  onNavigateHome?: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigateHome }) => (
  <div className="projects-page-container">
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
          {project.description && <p className="project-description">{project.description}</p>}
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsPage;