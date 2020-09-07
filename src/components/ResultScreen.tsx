import React from 'react';
import { View, Button, Text } from 'react-native';
import { setInitializeData, calculatePercentSelectedWords } from '../utils/index';
import styles from '../styles';

interface ResultScreenProps {
  reset(flag: boolean): void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ reset }) => {
  return (
      <View style={styles.previewContainer}>
        <Text style={styles.wordStyle}>
          You right to answer on {calculatePercentSelectedWords()}% of words!
        </Text>
        <Button 
          color={"indigo"} 
          title="BACK AND RESET"
          onPress={() => {
            reset(false);
            setInitializeData();
            }} />
      </View>
  );
};

export default ResultScreen;