import { ReactElement } from "react";
import { WeatherContextProvider } from "@contexts/WeatherContext";
import { render, RenderOptions } from "@testing-library/react-native";
import theme from "@theme/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <WeatherContextProvider>
          {children}
        </WeatherContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
export { customRender as render, Providers };