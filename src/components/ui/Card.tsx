import { View, type ViewProps } from 'react-native';

type CardProps = ViewProps & {
  className?: string;
};

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <View className={`rounded-xl border border-border bg-card p-4 ${className}`} {...props}>
      {children}
    </View>
  );
}
