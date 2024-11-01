import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { ForecastDayDTO } from "@dtos/city";

export const Container = styled.View`
  flex: 1;
  padding: 5px 10px;
  background-color: ${({theme}) => theme.COLORS.GREY900};
`;

export const InputContainer = styled.View`
  flex: 0.1;
`;

export const DaysContainer = styled.View`
  flex: 0.3;
`;

export const CurrentWeatherContainer = styled.View`
  margin: 15px 0;
  align-items: center;
  flex: 0.6;
  justify-content: space-evenly;
`;

export const WeatherDaysList = styled(FlatList as new (props: FlatListProps<ForecastDayDTO>) => FlatList<ForecastDayDTO>)``;

export const Separator = styled.View`
  width: 5px;
`;

export const TouchableCard = styled.TouchableOpacity``;