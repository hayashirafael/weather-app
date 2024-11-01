export interface SearchCityDTO {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

export interface CityDTO {
  location: LocationDTO;
  current: CurrentCityDTO;
  forecast: {
    forecastday: ForecastDayDTO[]
  }
}

export interface ForecastDayDTO {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    daily_chance_of_rain: number;
    avghumidity: number;
    condition: ConditionDTO;
    uv: number;
  };
  hour: HourDTO[]
}

export interface HourDTO {
  time: string;
  temp_c: number;
  condition: ConditionDTO
}

interface LocationDTO {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

interface CurrentCityDTO {
  temp_c: number;
  humidity: number;
  condition: ConditionDTO;
}


interface ConditionDTO {
  icon: string;
}