import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './src/styles';
import { mapWordsSelectFlag, mapWordsTranslate, arrWords } from './src/constants';
import BottomMenu from './src/components/BottomMenu';
import PageContainer from './src/components/PageContainer';

setInitializeData();

const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.mainConteiner}>
       <View style={styles.container}>
        <PageContainer counter={counter} />
        <BottomMenu counter={counter} updateCounter={setCounter}/>
      </View> 
    </View>
  );
}

function setInitializeData() {
  mapWordsTranslate.forEach((v,k) => arrWords.push(k));
  arrWords.forEach(v => mapWordsSelectFlag.set(v, false));
}

export default App;
