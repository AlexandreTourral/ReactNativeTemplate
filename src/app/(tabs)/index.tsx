import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Screen } from '@/components/ui/Screen';
import { Text } from '@/components/ui/Text';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <Screen>
      <ScrollView className="flex-1 px-4 py-6" contentContainerClassName="gap-6">
        <View className="gap-2">
          <Text variant="title">{t('home.title')}</Text>
          <Text variant="body">{t('home.subtitle')}</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
