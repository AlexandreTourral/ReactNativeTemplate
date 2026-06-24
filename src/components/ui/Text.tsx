import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

type TextVariant = 'title' | 'body' | 'caption';

type TextProps = RNTextProps & {
  variant?: TextVariant;
  className?: string;
};

const variantClasses: Record<TextVariant, string> = {
  title: 'text-2xl font-bold text-foreground',
  body: 'text-base text-foreground',
  caption: 'text-sm text-muted',
};

export function Text({ variant = 'body', className = '', ...props }: TextProps) {
  return <RNText className={`${variantClasses[variant]} ${className}`} {...props} />;
}
