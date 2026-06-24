import { Pressable, type PressableProps } from 'react-native';

import { Text } from '@/components/ui/Text';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = PressableProps & {
  label: string;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  ghost: 'bg-transparent border border-border',
};

const labelClasses: Record<ButtonVariant, string> = {
  primary: 'text-primary-foreground',
  secondary: 'text-secondary-foreground',
  ghost: 'text-foreground',
};

export function Button({
  label,
  variant = 'primary',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      className={`rounded-lg px-4 py-3 items-center ${variantClasses[variant]} ${disabled ? 'opacity-50' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      <Text className={`font-semibold ${labelClasses[variant]}`}>{label}</Text>
    </Pressable>
  );
}
