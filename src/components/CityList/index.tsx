import * as S from "./styles";
import { Typography } from "@components/Typography";
import { useTheme } from "styled-components/native";
import { SearchCityDTO } from "@dtos/city";

type CityListProps = {
  data: SearchCityDTO[];
  value: string;
  onPress: (city: SearchCityDTO) => void;
}

export function CityList({ data, value, onPress }: CityListProps) {
  const theme = useTheme();
  if (!value) return;
  return (
    <S.OptionsContainer testID="city-list-container">
      <S.CityList
        data={data}
        ItemSeparatorComponent={S.ItemSeparator}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <S.TouchableCity onPress={() => onPress(item)}>
            <Typography
              text={`${item.name}, ${item.region}, ${item.country}`}
              color={theme.COLORS.GREY100}
              size={16}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 16,
                borderBottomWidth: 1,
                borderBottomColor: theme.COLORS.GREY600,
                backgroundColor: theme.COLORS.GREY500
              }}
            />
          </S.TouchableCity>
        )}
      />

    </S.OptionsContainer>
  );
};