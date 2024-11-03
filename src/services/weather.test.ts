import { getCitiesSearchList, getWeatherCity } from "./weather";

describe("SERVICES: WeatherAPI request", () => {
  it("getCitiesSearchList: should return list of cities with initial ", async () => {
    const response = await getCitiesSearchList('sao');
    expect(response.length).toBeGreaterThanOrEqual(1);
  });

  it("getWeatherCity: should be return Brazil", async () => {
    const response = await getWeatherCity(-25.439377, -49.292473);
    expect(response.location.country).toBe('Brazil');
  });
});