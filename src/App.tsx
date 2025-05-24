import WeatherInfo from './components/WeatherInfo';
import AppIconContainer from './components/AppIconContainer';
import './App.css';

function App() {
  const sampleForecastItems = [
    { id: 1, topDegree: 20, icon: '☀️', bottomDegree: 15 },
    { id: 2, topDegree: 22, icon: '🌤️', bottomDegree: 16 },
    { id: 3, topDegree: 21, icon: '☀️', bottomDegree: 17 },
    { id: 4, topDegree: 19, icon: '🌥️', bottomDegree: 14 },
  ];

  return (
    <div className="app">
      <WeatherInfo
        city={'Addis Ababa'}
        currentTemperature={17}
        description={'Sunny'}
        mainWeatherIcon={'☀️'} // Placeholder icon
        highTemperature={27}
        lowTemperature={14}
        forecastItems={sampleForecastItems}
      />

      <div className="app-icons-grid">
        <AppIconContainer
          imageUrl="https://logowik.com/content/uploads/images/flutter5786.jpg" // Flutter icon
          label="Flutter"
          notificationText="1" // Example notification
        />
        <AppIconContainer
          imageUrl="https://ih1.redbubble.net/image.1153489299.7327/st,medium,507x507-pad,600x600,f8f8f8.u4.webp" // Dart icon
          label="Dart"
          notificationText="5+" // Example notification
        />
        <AppIconContainer
          imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" // GitHub icon
          label="GitHub"
        />
     
      </div>

      <div className="bottom-bar">
      <AppIconContainer
          imageUrl="https://img.icons8.com/ios_filled/512/40C057/apple-phone.png"
          label="Phone"
        />
        <AppIconContainer
          imageUrl="https://logos-world.net/wp-content/uploads/2020/09/Chrome-Logo.png"
          label="Browser"
        />
        <AppIconContainer
          imageUrl="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
          label="Gmail"
        />
        <AppIconContainer
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png"
          label="Contacts"
        />
      </div>
    </div>
  );
}

export default App;