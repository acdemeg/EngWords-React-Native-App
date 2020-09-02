import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import wordList from './wordsList';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import styles from './src/styles';

const mapWords = new Map(Object.entries(wordList));
const arrWords = new Array();
mapWords.forEach((v,k) => arrWords.push(k));
const STEP = 6;
const LAST_PAGE = arrWords.length - STEP;

const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.mainConteiner}>
      <View style={styles.container}>
        <WordContainer word={arrWords[0 + counter]}/>
        <WordContainer word={arrWords[1 + counter]}/>
        <WordContainer word={arrWords[2 + counter]}/>
        <WordContainer word={arrWords[3 + counter]}/>
        <WordContainer word={arrWords[4 + counter]}/>
        <WordContainer word={arrWords[5 + counter]}/>
        <BottomMenu counter={counter} updateCounter={setCounter}/>
      </View>
    </View>
  );
}

const WordContainer = ({ word }) => {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <View style={styles.wordContainer}>
      <Text onPress={() => setIsSelect((isSelect) ? false : true)}
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

const BottomMenu = ({ counter, updateCounter }) => {
  return (
    <View style={styles.bottomMenu}>
      {(counter == 0) ? null 
      : <Button onPress={() => updateCounter(counter - STEP)} title="BACK PAGE" />
      }
      {(counter == LAST_PAGE) ? null 
      : <Button onPress={() => updateCounter(counter + STEP)} title="NEXT PAGE" />
      }
    </View>
  );
};

export default App;
