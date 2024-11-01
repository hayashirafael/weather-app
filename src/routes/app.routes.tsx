import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Details } from "@screens/Details";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="details"
        component={Details}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
          headerTitle: 'Detalhes',
          headerStyle: { backgroundColor: theme.COLORS.GREY600 }
        }}
      />
    </Navigator>
  )
}