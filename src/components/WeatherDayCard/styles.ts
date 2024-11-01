import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  aspect-ratio: 3/4;
  height: 180px;
  background-color: ${({theme}) => theme.COLORS.GREY500};
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
