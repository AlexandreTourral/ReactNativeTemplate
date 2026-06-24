import { SafeAreaView, type SafeAreaViewProps } from 'react-native-safe-area-context';

type ScreenProps = SafeAreaViewProps & {
  className?: string;
};

export function Screen({ children, className = '', ...props }: ScreenProps) {
  return (
    <SafeAreaView className={`flex-1 bg-background ${className}`} {...props}>
      {children}
    </SafeAreaView>
  );
}
