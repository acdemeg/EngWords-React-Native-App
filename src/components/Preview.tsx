import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../styles';

interface PreviewProps {
  offPreview(flag: boolean): void;
}

const Preview: React.FC<PreviewProps> = ({ offPreview }) => {
  return (
      <View style={styles.previewContainer}>
        <Text style={styles.wordStyle}>
          App EngWords let check your 
          vocabulary and to define language level.
          You need select known words from 100 most popular english words. 
          Then app will count percent your right answers.
        </Text>
        <Button color={"indigo"} onPress={() => offPreview(false)} title="START" />
      </View>
  );
};

export default Preview;