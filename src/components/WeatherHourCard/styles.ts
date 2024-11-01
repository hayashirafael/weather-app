import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  aspect-ratio: 2/4;
  height: 180px;
  background-color: ${({theme}) => theme.COLORS.GREY500};
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
