import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';
import { WeatherContextProvider } from '@contexts/WeatherContext';
import theme from '@theme/index';
import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  if (!fontsLoaded) return <Loading />

  return (
    <SafeAreaProvider style={{ flex: 1 }} >
      <ThemeProvider theme={theme}>
        <WeatherContextProvider>
          <Routes />
        </WeatherContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );


}
