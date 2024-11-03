import * as S from "./styles";
import { useTheme } from "styled-components/native";

type CityInputProps = {
  value: string;
  onChange?: (value: string) => void;
}

export function CityInput({ value, onChange }: CityInputProps) {
  const theme = useTheme();
  return (
    <S.Container>
      <S.InputContainer>
        <S.Input
          testID="search-input"
          placeholder="Pesquise sua cidade"
          placeholderTextColor={theme.COLORS.GREY400}
          onChangeText={onChange}
          value={value}
        />
      </S.InputContainer>

    </S.Container>
  );
};