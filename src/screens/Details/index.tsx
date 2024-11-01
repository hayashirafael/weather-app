import * as S from "./styles";
import { WeatherImage } from "@components/WeatherImage";
import { WeatherHourCard } from "@components/WeatherHourCard";
import { Typography } from "@components/Typography";
import { ForecastDayDTO } from "@dtos/city";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);
dayjs.locale('pt-br');

type RouteParamProps = {
  forecast: ForecastDayDTO;
}

export function Details() {
  const routeNavigation = useRoute();
  const { forecast } = routeNavigation.params as RouteParamProps;
  const date = dayjs(forecast.date);
  const formattedDate = date.format("DD/MM");
  const dayOfWeek = date.format("dddd");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.InfoContainer>
          <S.TitleContainer>
            <S.HorizontalContainer>
              <Typography text={formattedDate} size={40} fontFamily="BOLD" />
              <Typography text={dayOfWeek} />
            </S.HorizontalContainer>
            <S.VerticalContainer>
              <WeatherImage imageURL={forecast.day.condition.icon} size="SM" />
            </S.VerticalContainer>
          </S.TitleContainer>
          <Typography text={`Temp Média: ${forecast.day.avgtemp_c}°C`} />
          <Typography text={`Temp Max: ${forecast.day.maxtemp_c}°C`} />
          <Typography text={`Temp Min: ${forecast.day.mintemp_c}°C`} />
          <Typography text={`Humidade: ${forecast.day.avghumidity}%`} />
          <Typography text={`Chance de chuva: ${forecast.day.daily_chance_of_rain}%`} />
          <Typography text={`UV: ${forecast.day.uv}`} />

        </S.InfoContainer>

        <S.HoursContainer>
          <S.HoursList
            data={forecast.hour}
            ItemSeparatorComponent={S.Separator}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <WeatherHourCard
                data={item}
              />
            )}
          />
        </S.HoursContainer>
      </S.Container>
    </SafeAreaView>
  );
};