import { api } from "./api";
import { CityDTO, SearchCityDTO } from "@dtos/city";

export async function getCitiesSearchList(query: string): Promise<SearchCityDTO[]> {
  try {
    const { data } = await api.get<SearchCityDTO[]>(`/search.json?q=${query}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getWeatherCity(lat: number, lon: number): Promise<CityDTO> {
  try {
    const { data } = await api.get<CityDTO>(`/forecast.json?q=${lat},${lon}&&days=3&aqi=no&alerts=no`);
    return data;
  } catch (error) {
    throw error
  }
}