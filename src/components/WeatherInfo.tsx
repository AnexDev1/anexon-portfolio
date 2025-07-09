
import React, { useEffect, useState } from 'react';
import './WeatherInfo.css';

const WeatherInfo: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const apiKey = '88fb9f1e9db0aeca4e74df92d5884514';
          const url = `https://corsproxy.io/?https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
          const res = await fetch(url);
          if (!res.ok) throw new Error('Failed to fetch weather');
          const data = await res.json();
          setWeather(data);
        } catch (e: any) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Location permission denied.');
        setLoading(false);
      }
    );
  }, []);


  if (loading) return (
    <div className="weather-container weather-awesome-bg">
      <div className="weather-awesome-header">
        <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sun Icon" className="weather-awesome-icon" />
        <span>Loading weather...</span>
      </div>
    </div>
  );
  if (error) return (
    <div className="weather-container weather-awesome-bg">
      <div className="weather-awesome-header">
        <img src="https://cdn-icons-png.flaticon.com/512/414/414825.png" alt="Cloud Icon" className="weather-awesome-icon" />
        <span>{error}</span>
      </div>
    </div>
  );
  if (!weather) return null;

  const iconMap: Record<string, string> = {
    '01d': '☀️', '01n': '🌙',
    '02d': '🌤️', '02n': '🌤️',
    '03d': '🌥️', '03n': '🌥️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌦️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️',
  };
  const icon = iconMap[weather.weather[0].icon] || '☀️';

  return (
    <div className="weather-container weather-awesome-bg">
      <div className="weather-awesome-header">
        <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sun Icon" className="weather-awesome-icon spin-slow" />
        <img src="https://cdn-icons-png.flaticon.com/512/414/414825.png" alt="Cloud Icon" className="weather-awesome-icon cloud-float" />
      </div>
      <div className="weather-main-content">
        <div className="weather-left">
          <div className="main-icon">{icon}</div>
          <div className="current-temp">{Math.round(weather.main.temp)}°</div>
          <div className="temp-range">
            {Math.round(weather.main.temp_max)}° / {Math.round(weather.main.temp_min)}°
          </div>
        </div>
        <div className="weather-right">
          <div className="city-name">{weather.name}</div>
          <div className="weather-description">{weather.weather[0].description}</div>
          <div className="weather-highlow">
            <span style={{ color: '#e67e22', fontWeight: 600 }}>High: {Math.round(weather.main.temp_max)}°</span>
            <span style={{ margin: '0 8px', color: '#888' }}>|</span>
            <span style={{ color: '#3498db', fontWeight: 600 }}>Low: {Math.round(weather.main.temp_min)}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;