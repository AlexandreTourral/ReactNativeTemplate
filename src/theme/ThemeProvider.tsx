import * as SystemUI from 'expo-system-ui';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

import { darkColors, lightColors } from '@/theme/colors';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { setColorScheme } = useColorScheme();
  const systemScheme = useRNColorScheme();

  useEffect(() => {
    const resolvedScheme = systemScheme === 'dark' ? 'dark' : 'light';

    setColorScheme(resolvedScheme);
    void SystemUI.setBackgroundColorAsync(
      resolvedScheme === 'dark' ? darkColors.background : lightColors.background,
    );
  }, [systemScheme, setColorScheme]);

  return children;
}
