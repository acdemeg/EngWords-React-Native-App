import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Text, View } from 'react-native';
import { mapWordsSelectFlag } from '../constants';
import styles from '../styles';

const WordContainer = ({ word }) => {
  const [isSelect, setIsSelect] = useState(mapWordsSelectFlag.get(word));

  return (
    <View style={styles.wordContainer}>
      <Text onPress={() => {
        setIsSelect((isSelect) ? false : true);
        mapWordsSelectFlag.set(word, (isSelect) ? false : true)
      }}
        style={(isSelect) ? styles.wordSelected : styles.wordNotSelected}
        >
        {word}
      </Text>
      <View style={styles.checkWord}>
        <MaterialCommunityIcons 
          name={(isSelect) ? "check-bold" : "check-outline"} 
          backgroundColor="green" 
          size={60} />
      </View>
    </View>
  );
}

export default WordContainer;