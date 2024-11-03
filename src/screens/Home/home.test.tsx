import { Routes } from "@routes/index";
import { render, waitFor, screen, act, fireEvent } from "@tests/utils/customRender";

describe("SCREENS: Home", () => {
  beforeEach(() => render(<Routes />));
  afterEach(() => screen.unmount());

  it("should be show all containers in home page", async () => {
    await waitFor(() => {
      expect(screen.queryByTestId('loading')).toBeNull();
    });
    expect(screen.getByTestId('home-input-container')).toBeTruthy();
    expect(screen.getByTestId('home-current-weather-container')).toBeTruthy();
    expect(screen.getByTestId('home-days-container')).toBeTruthy();
  });

  it("should be show city-list-container when input search as changed", async () => {
    await waitFor(() => {
      expect(screen.queryByTestId('loading')).toBeNull();
    });
    await waitFor(() => act(() => {
      const cityInput = screen.getByTestId('search-input');
      fireEvent.changeText(cityInput, 'curitiba');
    }));
    expect(screen.getByTestId('city-list-container')).toBeTruthy()
  });

});