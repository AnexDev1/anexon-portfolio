import React from 'react';
import './WeatherInfo.css';

interface ForecastItem {
  id: number;
  topDegree: number;
  icon: string; // Reverted to string for text/emoji
  bottomDegree: number;
}

interface WeatherInfoProps {
  city: string;
  currentTemperature: number;
  description: string;
  mainWeatherIcon: string; // Reverted to string for text/emoji
  highTemperature: number;
  lowTemperature: number;
  forecastItems: ForecastItem[];
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  city,
  currentTemperature,
  description,
  mainWeatherIcon,
  highTemperature,
  lowTemperature,
  forecastItems,
}) => {
  return (
    <div className="weather-container">
      <div className="weather-main-content">
        {/* Left Side */}
        <div className="weather-left">
          <div className="main-icon">{mainWeatherIcon}</div> {/* Render directly */}
          <div className="current-temp">{currentTemperature}°</div>
          <div className="temp-range">
            {highTemperature}° / {lowTemperature}°
          </div>
        </div>

        {/* Right Side */}
        <div className="weather-right">
          <div className="city-name">{city}</div>
          <div className="weather-description">{description}</div>
          <div className="forecast-grid">
            {forecastItems.map((item) => (
              <div key={item.id} className="forecast-item">
                <div className="forecast-degree-top">{item.topDegree}°</div>
                <div className="forecast-icon">{item.icon}</div> {/* Render directly */}
                <div className="forecast-degree-bottom">{item.bottomDegree}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;