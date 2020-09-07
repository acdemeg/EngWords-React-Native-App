import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../styles';

interface PreviewProps {
  offPreview(flag: boolean): void;
}

const Preview: React.FC<PreviewProps> = ({ offPreview }) => {
  return (
      <View style={styles.previewContainer}>
        <Text style={styles.textStyle}>
          Приложение EngWords проверить вас словарный запас.
          Вам необходимо выбрать из 100 предложенных популярных слов те
          которые вы знаете. 
          Приложение будет иногда проверять вас на честность.
          В конце вы увидите итоговый процент правильных ответов.
        </Text>
        <Button color={"indigo"} onPress={() => offPreview(false)} title="START" />
      </View>
  );
};

export default Preview;