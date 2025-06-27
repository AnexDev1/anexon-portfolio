import { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import AppIconContainer from './components/AppIconContainer';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import './App.css';

type Page = 'home' | 'projects' | 'contacts';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigateToProjects = () => {
    setCurrentPage('projects');
  };

  const handleNavigateToGitHub = () => {
    window.open('https://github.com/anexdev1', '_blank', 'noopener,noreferrer');
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
  };

  const renderHomePage = () => (
    <>
      <WeatherInfo />
      <div className="app-icons-grid">
        <AppIconContainer
          imageUrl="https://logowik.com/content/uploads/images/flutter5786.jpg" 
          label="Projects"
          notificationText="7+"
          noBackground={true}
          onClick={handleNavigateToProjects}
        />
        <AppIconContainer
          imageUrl="https://m.media-amazon.com/images/I/41Wt+LyfovL.png" // Dart icon
          label="Resume"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/src/assets/pdf/resume.pdf';
            link.download = 'resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        />
        <AppIconContainer
          imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
          label="GitHub"
          notificationText="99+" // Example notification
          onClick={handleNavigateToGitHub}
        />
        <AppIconContainer
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
          label="Linkedin"
          notificationText="99+"
          imageWidth="60px"
          imageHeight="60px"
          noBackground={true}
          onClick={() => window.open('https://www.linkedin.com', '_blank', 'noopener,noreferrer')}
        />
      </div>
    </>
  );

  return (
    <div className="app">
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'projects' && <ProjectsPage onNavigateHome={handleNavigateHome} />}
      {currentPage === 'contacts' && <ContactPage />}
      {currentPage === 'home' && (
        <div className="bottom-bar">
          <AppIconContainer
            imageUrl="https://img.icons8.com/ios_filled/512/40C057/apple-phone.png" // Corrected: Phone icon
            label="Phone" // Corrected: Label "Phone"
            onClick={() => {
              window.open('tel:+251917413622');
            }}
          />
          <AppIconContainer
            imageUrl="https://logos-world.net/wp-content/uploads/2020/09/Chrome-Logo.png"
            label="Browser"
            // onClick={() => alert('Browser clicked!')}
          />
          <AppIconContainer
            imageUrl="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
            label="Gmail"
            onClick={() => {
              window.open('mailto:anwarnasir0970@gmail.com');
            }}
          />
          <AppIconContainer
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png"
            label="Contacts"
            onClick={() => setCurrentPage('contacts')}
          />
        </div>
      )}
    </div>
  );
}

export default App;