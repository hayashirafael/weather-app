import { SearchCityDTO } from "@dtos/city";
import { FlatList, FlatListProps, TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const OptionsContainer = styled.View`
  overflow: hidden;
  z-index: 1;
  position: absolute;
  border-radius: 8px;
  top: 55px;
  left: 0;
  right: 0;
`;

export const CityList = styled(FlatList as new (props: FlatListProps<SearchCityDTO>) => FlatList<SearchCityDTO>)``;

export const ItemSeparator = styled.View`
  height: 1px;
`;

export const TouchableCity = styled.TouchableOpacity``;
