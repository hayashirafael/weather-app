import * as S from './styles'
import { WeatherImage } from '@components/WeatherImage'
import { Typography } from '@components/Typography';
import { CustomIcon } from '@components/CustomIcon';
import { HourDTO } from '@dtos/city'
import { Thermometer } from 'lucide-react-native';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';
dayjs.extend(localeData);
dayjs.locale('pt-br');

type WeatherDayCardProps = {
  data: HourDTO
}

export function WeatherHourCard({ data }: WeatherDayCardProps) {
  const date = dayjs(data.time);
  const formattedTime = date.format("HH:mm");

  return (
    <S.Container>
      <Typography text={formattedTime} />
      <WeatherImage imageURL={data.condition.icon} size='SM' />
      <S.HorizontalContainer>
        <CustomIcon icon={Thermometer} />
        <Typography text={`${data.temp_c}°C`} />
      </S.HorizontalContainer>
    </S.Container>
  )
}