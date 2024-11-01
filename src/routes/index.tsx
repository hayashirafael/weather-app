import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";

export function Routes() {
  const { COLORS } = useTheme();
  const navigationTheme = DefaultTheme;
  navigationTheme.colors.background = COLORS.GREY900;

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppRoutes />
    </NavigationContainer>
  )
}