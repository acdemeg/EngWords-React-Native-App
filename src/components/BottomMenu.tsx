import React from 'react';
import { View, Button } from 'react-native';
import { STEP, LAST_PAGE } from '../utils/index';
import styles from '../styles';

interface BottomMenuProps {
  counter: number;
  updateCounter(newCounter: number): void;
  toEndTest(flag: boolean): void;
}

const BottomMenu: React.FC<BottomMenuProps> = ({ counter, updateCounter, toEndTest }) => {
  return (
    <View style={styles.bottomMenu}>
      {(counter == 0) ? null 
      : <Button onPress={() => updateCounter(counter - STEP)} title="BACK PAGE" />
      }
      {(counter == LAST_PAGE) ?  <Button onPress={() => {toEndTest(true)}} color={"crimson"} title="END TEST" /> 
      : <Button onPress={() => updateCounter(counter + STEP)} title="NEXT PAGE" />
      }
    </View>
  );
};

export default BottomMenu;