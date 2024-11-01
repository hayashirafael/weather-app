import * as S from './styles'
import { WeatherImage } from '@components/WeatherImage'
import { Typography } from '@components/Typography';
import { CustomIcon } from '@components/CustomIcon';
import { ForecastDayDTO } from '@dtos/city'
import { Thermometer, Waves } from 'lucide-react-native';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';
dayjs.extend(localeData);
dayjs.locale('pt-br');

type WeatherDayCardProps = {
  data: ForecastDayDTO
}

export function WeatherDayCard({ data }: WeatherDayCardProps) {
  const date = dayjs(data.date);
  const formattedDate = date.format("DD/MM");
  const dayOfWeek = date.format("dddd");

  return (
    <S.Container>
      <Typography text={dayOfWeek} />
      <WeatherImage imageURL={data.day.condition.icon} size='SM' />
      <S.HorizontalContainer>
        <CustomIcon icon={Thermometer} />
        <Typography text={`${data.day.avgtemp_c}°C`} size={20} fontFamily='BOLD' />
      </S.HorizontalContainer>

      <S.HorizontalContainer>
        <CustomIcon icon={Waves} />
        <Typography text={` ${data.day.avghumidity}%`} size={13} />
      </S.HorizontalContainer>
      <Typography text={formattedDate} />
    </S.Container>
  )
}