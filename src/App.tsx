import { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import AppIconContainer from './components/AppIconContainer';
import ProjectsPage from './components/ProjectsPage';
import './App.css';

type Page = 'home' | 'projects';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const sunnyIcon = "☀️";
  const partlyCloudyIcon = "🌤️";
  const cloudyIcon = "🌥️";

  const sampleForecastItems = [
    { id: 1, topDegree: 20, icon: sunnyIcon, bottomDegree: 15 },
    { id: 2, topDegree: 22, icon: partlyCloudyIcon, bottomDegree: 16 },
    { id: 3, topDegree: 21, icon: sunnyIcon, bottomDegree: 17 },
    { id: 4, topDegree: 19, icon: cloudyIcon, bottomDegree: 14 },
  ];

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
      <WeatherInfo
        city={'Addis Ababa'}
        currentTemperature={17}
        description={'Sunny'}
        mainWeatherIcon={sunnyIcon}
        highTemperature={27}
        lowTemperature={14}
        forecastItems={sampleForecastItems}
      />
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
      
      {currentPage === 'home' && (
        <div className="bottom-bar">
          <AppIconContainer
            imageUrl="https://img.icons8.com/ios_filled/512/40C057/apple-phone.png" // Corrected: Phone icon
            label="Phone" // Corrected: Label "Phone"
            onClick={handleNavigateHome}
          />
          <AppIconContainer
            imageUrl="https://logos-world.net/wp-content/uploads/2020/09/Chrome-Logo.png"
            label="Browser"
            // onClick={() => alert('Browser clicked!')}
          />
          <AppIconContainer
            imageUrl="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
            label="Gmail"
            // onClick={() => alert('Gmail clicked!')}
          />
          <AppIconContainer
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png"
            label="Contacts"
            // onClick={() => alert('Contacts clicked!')}
          />
        </div>
      )}
    </div>
  );
}

export default App;