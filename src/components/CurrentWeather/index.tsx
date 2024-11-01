import { Typography } from "@components/Typography";
import * as S from "./styles";
import { WeatherImage } from "@components/WeatherImage";
import { CityDTO } from "@dtos/city";

type CurrentWeather = {
  city: CityDTO
}

export function CurrentWeather({ city }: CurrentWeather) {
  return (
    <S.Container>
      <S.HorizontalTypographyContainer>
        <Typography text={`${city.location.name}, `} fontFamily="BOLD" size={25} />
        <Typography text={city.location.region} size={25} />
      </S.HorizontalTypographyContainer>
      <WeatherImage
        size="XL"
        imageURL={city.current.condition.icon}
      />
      <S.WeatherInformationContainer>
        <Typography text={`${String(city.current.temp_c)}°C`} fontFamily="BOLD" size={60} />
        <Typography text={`Humidade: ${city.current.humidity}%`} />
      </S.WeatherInformationContainer>
    </S.Container>
  );
};