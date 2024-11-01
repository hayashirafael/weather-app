import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { HourDTO } from "@dtos/city";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5px 10px;
  background-color: ${({theme}) => theme.COLORS.GREY900};
`;

export const InfoContainer = styled.View`
  align-items: center;
  flex: 0.7;
`;

export const HoursContainer = styled.View`
  margin: 15px 0;
  align-items: center;
  flex: 0.3;
`;

export const HorizontalContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const VerticalContainer = styled.View`
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  padding: 30px;
  flex-direction: row;
  align-items: center;
`;

export const HoursList = styled(FlatList as new (props: FlatListProps<HourDTO>) => FlatList<HourDTO>)``;

export const Separator = styled.View`
  width: 5px;
`;
