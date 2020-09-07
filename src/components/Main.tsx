import React, { useState } from 'react';
import { View } from 'react-native';
import styles from '../../src/styles';
import BottomMenu from './BottomMenu';
import PageContainer from './PageContainer';
import { setInitializeData } from '../utils/index';

interface MainProps {
  toEndTest(flag: boolean): void;
}

setInitializeData();

const Main: React.FC<MainProps> = ({ toEndTest }) => {

  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.mainConteiner}>
       <View style={styles.container}>
        <PageContainer counter={counter} />
        <BottomMenu counter={counter} toEndTest={toEndTest} updateCounter={setCounter}/>
      </View> 
    </View>
  );
}



export default Main;
