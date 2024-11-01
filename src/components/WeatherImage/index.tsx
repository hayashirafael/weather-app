import * as S from './styles'

type WeatherImageProps = {
  imageURL: string;
  size: 'SM' | 'XL'
}

export function WeatherImage({ imageURL, size }: WeatherImageProps) {
  return (
    <S.Image
      source={{ uri: `https:${imageURL}` }}
      height={size === 'SM' ? 70 : 150}
      width={size === 'SM' ? 70 : 150}
    />
  )
}