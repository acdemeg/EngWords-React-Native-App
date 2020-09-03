import React from 'react';
import { View, Button } from 'react-native';
import { STEP, LAST_PAGE } from '../constants';
import styles from '../styles';

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

export default BottomMenu;