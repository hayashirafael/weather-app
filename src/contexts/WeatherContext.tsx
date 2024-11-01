import { createContext, ReactNode } from "react";
import { getCitiesSearchList, getWeatherCity } from "@services/weather";
import { CityDTO, SearchCityDTO } from "@dtos/city";

type WeatherContextDataProps = {
  getCitiesSearch: (search: string) => Promise<SearchCityDTO[]>;
  getWeather: (lat: number, lon: number) => Promise<CityDTO>;
}

type WeatherContextProviderProps = {
  children: ReactNode;
}

export const WeatherContext = createContext<WeatherContextDataProps>({} as WeatherContextDataProps);

export function WeatherContextProvider({ children }: WeatherContextProviderProps) {

  async function getWeather(lat: number, lon: number): Promise<CityDTO> {
    try {
      const weather = await getWeatherCity(lat, lon);
      return weather;
    } catch (error) {
      throw error;
    }
  }

  async function getCitiesSearch(search: string): Promise<SearchCityDTO[]> {
    try {
      const response = await getCitiesSearchList(search);
      return response;
    } catch (error) {
      throw error
    }
  }

  return (
    <WeatherContext.Provider value={{
      getCitiesSearch,
      getWeather
    }}>
      {children}
    </WeatherContext.Provider>
  )
}