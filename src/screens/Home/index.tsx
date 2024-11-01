import * as S from "./styles";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { CityInput } from "@components/CityInput";
import { WeatherDayCard } from "@components/WeatherDayCard";
import { CityList } from "@components/CityList";
import { Loading } from "@components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { CityDTO, SearchCityDTO } from "@dtos/city";
import { useWeather } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { CurrentWeather } from "@components/CurrentWeather";

export function Home() {
  const [city, setCity] = useState<CityDTO>({} as CityDTO);
  const [cities, setCities] = useState<SearchCityDTO[]>([]);
  const [citySearch, setCitySearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation();
  const errorAlert = () => Alert.alert('Erro', 'Houve uma falha de comunicação com o servidor, tente novamente mais tarde.');
  const fakeLocation = { lat: -23.579506, lon: -46.655985 }
  const {
    getCitiesSearch,
    getWeather
  } = useWeather()

  async function handleSearchCity() {
    try {
      const list = await getCitiesSearch(citySearch);
      setCities(list)
    } catch (error) {
      errorAlert();
    }
  }

  async function handleGetCity(lat: number, lon: number) {
    try {
      setIsLoading(true)
      const response = await getWeather(lat, lon);
      setCity(response);
      setCitySearch('');
    } catch (error) {
      errorAlert();
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        await handleGetCity(fakeLocation.lat, fakeLocation.lon)
        Alert.alert('Localização não autorizada', 'Acesse as permissões do seu aplicativo e autorize a localização para ter acesso a previsão a partir da localização atual do seu dispositivo. ')
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      await handleGetCity(coords.latitude, coords.longitude);
    })();
  }, []);


  useEffect(() => {
    if (citySearch.length > 0) {
      handleSearchCity()
    }
  }, [citySearch]);

  if (isLoading) return <Loading />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.InputContainer>
          <CityInput
            value={citySearch}
            onChange={setCitySearch}
          />
          <CityList
            data={cities}
            value={citySearch}
            onPress={(data) => handleGetCity(data.lat, data.lon)}
          />
        </S.InputContainer>

        <S.CurrentWeatherContainer>
          <CurrentWeather city={city} />
        </S.CurrentWeatherContainer>

        <S.DaysContainer>
          <S.WeatherDaysList
            data={city.forecast.forecastday}
            ItemSeparatorComponent={S.Separator}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <S.TouchableCard onPress={() => navigate("details", { forecast: item })}>
                <WeatherDayCard data={item} />
              </S.TouchableCard>
            )}
          />
        </S.DaysContainer>

      </S.Container>
    </SafeAreaView>
  );
};