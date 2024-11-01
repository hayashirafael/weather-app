import { useTheme } from 'styled-components/native';
import { LucideIcon } from 'lucide-react-native';

type ButtonProps = {
  icon: LucideIcon;
  color?: string;
  size?: number;
}

export function CustomIcon({ icon: Icon, size, color }: ButtonProps) {
  const { COLORS } = useTheme();
  return (
    <Icon
      width={size ? size : 20}
      height={size ? size : 20}
      color={color ? color : COLORS.WHITE}
    />
  );
};