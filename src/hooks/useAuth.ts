import { useContext } from 'react';
import { WeatherContext } from '@contexts/WeatherContext';

export function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}