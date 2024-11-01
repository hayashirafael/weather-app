import {TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const InputContainer = styled.View`
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.COLORS.GREY600};
`;

export const Input = styled(TextInput)`
  color: ${({ theme}) => theme.COLORS.GREY100};
  font-size: 16px;
  border-radius: 8px;
  height: 45px;
`;
