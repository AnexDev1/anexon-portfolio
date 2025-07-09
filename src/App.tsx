
import { useEffect, useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import AppIconContainer from './components/AppIconContainer';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import './App.css';

type Page = 'home' | 'projects' | 'contacts';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Dynamic background wallpaper logic
  useEffect(() => {
    // Example: change wallpaper based on time of day
    const hour = new Date().getHours();
    let bgUrl = '';
    if (hour >= 6 && hour < 12) {
      bgUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // Morning
    } else if (hour >= 12 && hour < 18) {
      bgUrl = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'; // Afternoon
    } else if (hour >= 18 && hour < 20) {
      bgUrl = 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80'; // Evening
    } else {
      bgUrl = 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80'; // Night
    }
    document.body.style.backgroundImage = `url('${bgUrl}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }, []);

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
          notificationText="20+"
          noBackground={true}
          onClick={handleNavigateToProjects}
        />
        <AppIconContainer
          imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          label="GitHub"
          notificationText="99+"
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
        <AppIconContainer
          imageUrl="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
          label="Telegram"
          notificationText="New"
          noBackground={true}
          onClick={() => window.open('https://t.me/anexdev', '_blank', 'noopener,noreferrer')}
        />
        <AppIconContainer
          imageUrl="https://pngdownload.io/wp-content/uploads/2023/12/X-Logo-Twitter-Logo-Iconic-Social-Media-Brand-Symbol-PNG-Transparent-Recognizable-Emblem-jpg.webp"
          label="X (Twitter)"
          noBackground={true}
          onClick={() => window.open('https://x.com/n3x0dev?t=uTLQwvhZ9chE1SqY8twyGw&s=09', '_blank', 'noopener,noreferrer')}
        />
        <AppIconContainer
          imageUrl="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
          label="Facebook"
          noBackground={true}
          onClick={() => window.open('https://facebook.com/anexdev', '_blank', 'noopener,noreferrer')}
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